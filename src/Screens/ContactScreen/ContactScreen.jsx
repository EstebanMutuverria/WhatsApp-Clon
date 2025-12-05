import React from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import './ContactScreen.css'

export default function ContactScreen() {
  return (
    <div className='contact-screen-container'>
        <LeftSidebar />
        <ContactSidebar />
    </div>
  )
}