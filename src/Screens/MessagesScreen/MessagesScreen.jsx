import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import './MessagesScreen.css'
import { ContactDetailContext } from '../../Contexts/ContactDetailContext'
import ChatContent from '../../Components/ChatContent/ChatContent'
import AddNewMessage from '../../Components/AddNewMesagge/AddNewMessage'
import { ContactListContext } from '../../Contexts/ContactListContext'

export default function MessagesScreen() {
    const { contactSelected } = useContext(ContactDetailContext);
    console.log(contactSelected);


    return (
        <div className='messages-screen-container'>
            <LeftSidebar />
            <ContactSidebar />
            <div className='messages-screen-chat-content'>
                <ChatContent />
                <AddNewMessage />
            </div>
        </div>
    )
}
