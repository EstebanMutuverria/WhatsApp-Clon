import React from 'react'
import './ContactList.css'
import { Link } from 'react-router'

function formatMessageState(state){
    if(state === 'SEEN'){
        return '✓✓';
    }else if(state === 'RECEIVED'){
        return '✓';
    }else{
        return '';
    }   
}

export default function ContactList(props) {
    if(props.loadingContactState){
        return (
            <div>Cargando contactos...</div>
        )

    }
    return (
        <div>
            {
                props.contactState.map(
                    function(contact){
                        return (
                            <Link to={'/chat/'+ contact.contact_id} key={contact.contact_id} className='chat-container'> 
                                <div>
                                    <img className='img_avatar' src={contact.contact_avatar} alt={contact.contact_name} width="50" />
                                </div>
                                <div className='chat-middle'>
                                    <span>{contact.contact_name}</span>
                                    <div className='chat-middle-bottom'>
                                        {contact.contact_last_message_state === 'SEEN' ? <span className='message-state' style={{color: 'blue'}}>{formatMessageState(contact.contact_last_message_state)}</span>:<span className='message-state'>{formatMessageState(contact.contact_last_message_state)}</span>}
                                        {contact.contact_unseen_messages <= 0 ? <span>{contact.contact_last_message_content}</span> : <span style={{fontWeight: '700'}}>{contact.contact_last_message_content}</span>}
                                    </div>
                                </div>
                                <div className='chat-last'>
                                    <span>{contact.contact_last_message_date} ayer</span>
                                    {
                                        contact.contact_unseen_messages > 0 &&
                                        <span className='unseen-messages-number'>{contact.contact_unseen_messages}</span>
                                    }
                                </div>
                            </Link>
                        )
                    }
                )
            }
        </div>
    )
}
