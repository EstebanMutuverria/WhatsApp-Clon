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
                    <img src='https://cdn.pixabay.com/animation/2023/11/09/03/05/03-05-45-320_512.gif' alt='Cargando contacto...'></img>
                </div>
                : 
                <div className='messages-screen-chat-content'>
                    <ChatContent />
                    <AddNewMessage />
                </div>
            }
        </div>
    )
}
