import React, { useEffect } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { useParams } from 'react-router'
import { useState } from 'react'
import { getContactById } from '../../Services/ContactService'

export default function MessagesScreen() {
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

    console.log(loadingContact, contactSelected);

    console.log(parametros_url.contact_id);
    return (
        <div>
            <ContactSidebar />
            {
                loadingContact ? 
                <p>Cargando contacto...</p>
                : 
                <p>Chat seleccionado: {contactSelected.contact_name}</p>
            }
        </div>
    )
}
