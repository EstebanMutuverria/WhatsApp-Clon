import React from 'react'
import './ContactList.css'
import { Link } from 'react-router'

function formatMessageState(state){
    if(state === 'SEEN'){
        return (<svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18"><title>status-dblcheck</title><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>);
    }else if(state === 'RECEIVED'){
        return (<svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18"><title>status-dblcheck</title><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>);
    }else if(state === 'NOT-RECEIVED'){
        return (<svg viewBox="0 0 14 18" height="18" width="14" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 14 18"><title>status-check</title><path fill="currentColor" d="M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>);
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
