import React, { useContext } from 'react'
import { ContactDetailContext } from '../../Contexts/ContactDetailContext'

export default function AddNewMessage() {
    const{addNewMessage} = useContext(ContactDetailContext)

    function handleSubmitNewMessage(event){
        event.preventDefault();
        const newMessage = event.target.mensaje.value;
        if(newMessage.trim() === '') return;
        addNewMessage(newMessage);
        event.target.mensaje.value = '';
    }
    return (
        <form onSubmit={handleSubmitNewMessage}>
            <label htmlFor="mensaje">Mensaje: </label>
            <textarea  id="mensaje"></textarea>
            <button>Enviar</button>
        </form>
    )
}
