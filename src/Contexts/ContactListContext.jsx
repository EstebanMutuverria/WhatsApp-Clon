import { createContext } from "react";
import { useState } from "react";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { getContactList } from "../Services/ContactService";

export const ContactListContext = createContext();

const ContactListContextProvider = () => {
        const [contactState, setContactState] = useState([])
        const [loadingContactState, setLoadingContactState] = useState(true)
        
        function loadContactList(){
            setLoadingContactState(true);
            /* setTimeout nos permite atrasar la ejecucion de otra funcion y recibe 2 parametros:
            1- la accion a retrasar
            2- los milisegundos que quiero que se retrase la ejecucion
            */
            setTimeout(
                function(){
                    console.log("Cargando Lista de contactos")
                    //Cargo la respuesta del servidor
                    const contact_list = getContactList();
                    //Guardo la respuesta
                    setContactState(contact_list);
                    setLoadingContactState(false)
                },2000
            )
        }
    
        /* La funcion useEffect nos permite controlar cuantas veces una funcion sera invocada 
        useEffect espera recibir dos parametros:
        1 = La funcion que queremos controlar.
        2 = Las dependencias. Es una lista de estados. Si la lista esta vacia "[]" solo se ejecutara 
        una sola vez
    
        */
        useEffect(loadContactList,[])

    const providerValues = {
        contactState,
        loadingContactState, 
        loadContactList
    }

    return (
        <ContactListContext.Provider value={providerValues}>
            <Outlet />
        </ContactListContext.Provider>
    )
}

export default ContactListContextProvider