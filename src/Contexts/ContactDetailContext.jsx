import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { ContactListContext } from "./ContactListContext";

export const ContactDetailContext = createContext();

const ContactDetailContextProvider = () => {
    const parametros_url = useParams();
    const contact_id = parametros_url.contact_id;
    const { contactState, getContactById, updateContactById } = useContext(ContactListContext);
    const contactSelected = getContactById(contact_id);
    const [loadingContact, setLoadingContact] = useState(true);

    function loadContactById() {
        setLoadingContact(true);
        //Simulamos la carga con un setTimeout
        setTimeout(
            function () {
                setLoadingContact(false);
            },
            2000
        )
    }
    useEffect(loadContactById, [parametros_url.contact_id])

    const providerValues = {
        contactSelected,
        addNewMessage
    }

    function addNewMessage(content) {
        const newMessage = {
            message_id: contactSelected.messages.length + 1,
            message_content: content,
            message_state: 'RECEIVED',
            message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            send_by_me: true
        }

        updateContactById(contact_id, {
            ...contactSelected,
            messages: [...contactSelected.messages, newMessage]
        });
    }

    return (
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet />
        </ContactDetailContext.Provider>
    )
}
export default ContactDetailContextProvider
