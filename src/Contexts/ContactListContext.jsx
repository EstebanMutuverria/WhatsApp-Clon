import { createContext } from "react";
import { useState } from "react";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { getContactList } from "../Services/ContactService";

export const ContactListContext = createContext();

const ContactListContextProvider = () => {
    const [contactList, setContactList] = useState([])
    const [filteredContacts, setFilteredContacts] = useState([])
    const [loadingContactState, setLoadingContactState] = useState(true)

    /* Crear una funcion llamada addNewContact que 
    reciba el nombre del nuevo contacto y lo agregue al estado de contactos */

    function addNewContact(new_contact_name) {
        const newContact = {
            contact_id: contactList.length + 1,
            contact_name: new_contact_name,
            contact_avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhISBw4WEBITExAQFQ4RGBsPEBUOGBEXFhYSEx8YHSggGBomGxUXITEhJSkrLi4uGR8zODMtQygtMS4BCgoKDg0NDg0PDysZFRkrKystKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADQQAQABAgIHBgQGAwEAAAAAAAABAgMEEQUUITFBUZESIjJTYdEVcYGhEyNScsHhorHwQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD60AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+LxdGFp/MnbwpjfIJDEzlvV/EaTuXp7s9iOVO/rvQ6p7U97b6ztIVbInPcyqUbJ2JVjSFyzPi7Ucqtv8AZCrGImCx9OKjKO7V+mf45pYAAAAAAAAAAAAAAAAAAAAAAI+NxMYWxNU7Z3RHOVcu3Ju3JquTnM8UvS9/8XFzEbqe79ePt9EFUAAAAZpqmmrOmcpjbExvzWHRuM1qz3vFG/19VdScBf1fFUzw3T+2f+z+gLKAigAAAAAAAAAAAAAAAAAAAKncq7dyZnjMz1lq2rp7FcxPCZj7tVQAAAAABasPV27FMzxppn7PR54ensYemJ4U0x9noigAAAAAAAAAAAAAAAAAAMZ7QV/S9j8HGTMbqu9Hz4/f/aEs2OwsYqxlumNsT6+yt3KJt1zFcZTGyYVNagAAzG/aDCRgbGsYqmnhnnP7Y3vHLOcojb6b8/o7+jMHqtrOvxVb/SOQJoCKAAAAAAAAAAAAAAAAAAxV4WnHY9GMgaTshHxeEpxVPe2TH/qN8ek80xjIFcv4G5Znw9qP1U7UVbcmKrdNfjpifnGZSKnmkWMHcvz3KZy5zshY6bVNHhpiPlEQ3KRz8FgKcNlM96rd2uXyTI3t8jIGkeLa3pq7W5liIy3AyAAAAAAAAAAAAAAAACDpHSEYaOzb21/aI5z7Ak38RRh6c71UR/uflDnXdMxE/k0Z+tWz7Q5Vy5NyvO5OczxlosSujOmLnCKek+7Hxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7s/GLvKnpPu5wDr2tNbfzaPrTP8AE+7oYfFUYmPyqs5/TOyrorDNMzTOdM5THGNkkKto5mjdJfizFGI8XCrn6T6umigAAAAAAAAAAAAAPDG4jVcPNXHdEc6laqqmuqZqnOZ2zPq6GnL3axEUxupj/Kf6yc1cTQAAAAAAAAAAAGVh0ZitZw/f8VOyfXlKupuibv4WNjlV3Z+u775AsICKAAAAAAAAAAAArWkZ7WOr/dMdNiMtFWEt11TNVumZnbM5cWupWvLp6LUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUist7VXZu0zHCYn7rHqVry6ehqVry6ehSJEgIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
            contact_unseen_messages: 0,
            contact_last_message_content: " ",
            contact_last_message_state: " ", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
            contact_last_message_date: new Date().toLocaleDateString(),
            messages: []
        }
        setContactList(prev => [...prev, newContact]);
        setFilteredContacts(prev => [...prev, newContact]);
    }

    function getContactById(contact_id) {
        for (const contact of contactList) {
            if (Number(contact.contact_id) === Number(contact_id)) {
                return contact;
            }
        }
    }

    function loadContactList() {
        setLoadingContactState(true);
        /* setTimeout nos permite atrasar la ejecucion de otra funcion y recibe 2 parametros:
        1- la accion a retrasar
        2- los milisegundos que quiero que se retrase la ejecucion
        */
        setTimeout(
            function () {
                console.log("Cargando Lista de contactos")
                //Cargo la respuesta del servidor
                const contact_list = getContactList();
                //Guardo la respuesta
                setContactList(contact_list);
                setFilteredContacts(contact_list);
                setLoadingContactState(false)
            }, 2000
        )
    }

    function updateContactById(contact_id, contact_to_update) {
        const updatedList = contactList.map(contact => {
            if (Number(contact.contact_id) === Number(contact_id)) {
                return contact_to_update;
            }
            return contact;
        })
        setContactList(updatedList);
        setFilteredContacts(prev => prev.map(contact => {
            if (Number(contact.contact_id) === Number(contact_id)) {
                return contact_to_update;
            }
            return contact;
        }));
    }

    function filterContacts(query) {
        const normalizedQuery = query.toLowerCase().replace(/\s+/g, '');

        if (normalizedQuery === "") {
            setFilteredContacts(contactList);
        } else {
            const filtered = contactList.filter(contact => {
                const normalizedName = contact.contact_name.toLowerCase().replace(/\s+/g, '');
                return normalizedName.includes(normalizedQuery);
            })
            setFilteredContacts(filtered)
        }
    }

    /* La funcion useEffect nos permite controlar cuantas veces una funcion sera invocada 
    useEffect espera recibir dos parametros:
    1 = La funcion que queremos controlar.
    2 = Las dependencias. Es una lista de estados. Si la lista esta vacia "[]" solo se ejecutara 
    una sola vez
     
    */
    useEffect(loadContactList, [])

    const providerValues = {
        contactState: filteredContacts,
        loadingContactState,
        loadContactList,
        addNewContact,
        getContactById,
        updateContactById,
        filterContacts
    }

    return (
        <ContactListContext.Provider value={providerValues}>
            <Outlet />
        </ContactListContext.Provider>
    )
}

export default ContactListContextProvider