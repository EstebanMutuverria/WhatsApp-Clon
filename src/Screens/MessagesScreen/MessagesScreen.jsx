import React, { useContext} from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import './MessagesScreen.css'
import {ContactDetailContext} from '../../Contexts/ContactDetailContext'
import ChatContent from '../../Components/ChatContent/ChatContent'
import AddNewMessage from '../../Components/AddNewMesagge/AddNewMessage'

export default function MessagesScreen() {
    const {loadingContact, contactSelected} = useContext(ContactDetailContext);
    console.log(loadingContact, contactSelected);
    return (
        <div className='messages-screen-container'>
            <LeftSidebar />
            <ContactSidebar />
            {
                loadingContact ? 
                <div className='loader-chats'>
                    <img src='../../cargando/grey-9026.gif' alt='Cargando contacto...'></img>
                </div>
                : 
                <div className='messages-screen-chat-content'>
                    <ChatContent />
                    <div className='messages-screen-chat-form'>
                        <AddNewMessage />
                    </div>
                </div>
            }
        </div>
    )
}
