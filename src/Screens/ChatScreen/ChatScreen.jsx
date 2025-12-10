import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import './ChatScreen.css'
import { ContactListContext } from '../../Contexts/ContactListContext'

export default function ContactScreen() {
  return (
    <div className='chat-screen-container'>
        <LeftSidebar />
        <ContactSidebar />
    </div>
  )
}