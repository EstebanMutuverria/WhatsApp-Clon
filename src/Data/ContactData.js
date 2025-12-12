const contact_data = [
    {
        contact_id : 1,
        contact_name : "Contacto 1",
        contact_avatar: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        contact_unseen_messages : 2,
        contact_last_message_content : "como estas?",
        contact_last_message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Buenass",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Como estas?",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
        {
        contact_id : 2,
        contact_name : "Contacto 2",
        contact_avatar: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        contact_unseen_messages : 0,
        contact_last_message_content : "Buenass",
        contact_last_message_state : "SEEN", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Buenass",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Como estas?",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 3,
        contact_name : "Contacto 3",
        contact_avatar: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        contact_unseen_messages : 0,
        contact_last_message_content : "Buenass",
        contact_last_message_state : "NOT-RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Buenass",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Como estas?",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 4,
        contact_name : "Contacto 4",
        contact_avatar: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        contact_unseen_messages : 0,
        contact_last_message_content : "Buenass",
        contact_last_message_state : "SEEN", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Buenass",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Como estas?",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 5,
        contact_name : "Contacto 5",
        contact_avatar: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        contact_unseen_messages : 0,
        contact_last_message_content : "Buenass",
        contact_last_message_state : "SEEN", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Buenass",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Como estas?",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 6,
        contact_name : "Contacto 5",
        contact_avatar: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        contact_unseen_messages : 0,
        contact_last_message_content : "Buenass",
        contact_last_message_state : "SEEN", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Buenass",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Como estas?",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 7,
        contact_name : "Contacto 5",
        contact_avatar: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        contact_unseen_messages : 0,
        contact_last_message_content : "Buenass",
        contact_last_message_state : "SEEN", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Buenass",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Como estas?",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 8,
        contact_name : "Contacto 5",
        contact_avatar: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        contact_unseen_messages : 0,
        contact_last_message_content : "Buenass",
        contact_last_message_state : "SEEN", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Buenass",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Como estas?",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 9,
        contact_name : "Contacto 5",
        contact_avatar: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        contact_unseen_messages : 0,
        contact_last_message_content : "Buenass",
        contact_last_message_state : "SEEN", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Buenass",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Como estas?",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 10,
        contact_name : "Contacto 5",
        contact_avatar: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        contact_unseen_messages : 0,
        contact_last_message_content : "Buenass",
        contact_last_message_state : "SEEN", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Buenass",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Como estas?",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    
]

export default contact_data;