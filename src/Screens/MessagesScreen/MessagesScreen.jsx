import React, { useContext} from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import './MessagesScreen.css'
import {ContactDetailContext} from '../../Contexts/ContactDetailContext'

export default function MessagesScreen() {
    const {loadingContact, contactSelected} = useContext(ContactDetailContext);
    console.log(loadingContact, contactSelected);
    return (
        <div className='messages-screen-container'>
            <LeftSidebar />
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
