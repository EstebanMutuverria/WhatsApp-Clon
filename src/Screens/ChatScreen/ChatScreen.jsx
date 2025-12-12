import React, { useEffect, useState } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import './ChatScreen.css'
import { ContactListContext } from '../../Contexts/ContactListContext'

export default function ContactScreen() {
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simula llamada al servidor
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loader-overlay">
        <img src="./cargando/grey-9026.gif" alt="Cargando..." />
      </div>
    )
  }
  return (
    <div className='chat-screen-container'>
        <LeftSidebar />
        <ContactSidebar />
    </div>
  )
}