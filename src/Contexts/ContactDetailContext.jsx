import { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { getContactById } from "../Services/ContactService";

export const ContactDetailContext = createContext();

const ContactDetailContextProvider = () =>{
        const parametros_url = useParams();
        const contact_id = parametros_url.contact_id;
        const [contactSelected, setContactSelected] = useState(null);
        const [loadingContact, setLoadingContact] = useState(true);
    
        function loadContactById(){
            setLoadingContact(true);
            //Simulamos la carga con un setTimeout
            setTimeout(
                function(){
                    const contact = getContactById(contact_id)
                    setContactSelected(contact);
                    setLoadingContact(false);
                },
                2000
            )
        }
        useEffect(loadContactById, [parametros_url.contact_id])
    
    const providerValues = {
        contactSelected,
        loadingContact,
        loadContactById,
        addNewMessage
    }

    function addNewMessage(content){
        const newMessage = {
            message_id: contactSelected.messages.length + 1,
            message_content: content,
            message_state: 'NOT-SENDED',
            message_date: new Date().toLocaleString()
        }

        setContactSelected({
            ...contactSelected,
            messages: [...contactSelected.messages, newMessage]
        });
    }

    return (
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet/>
        </ContactDetailContext.Provider>
    )
}
export default ContactDetailContextProvider
