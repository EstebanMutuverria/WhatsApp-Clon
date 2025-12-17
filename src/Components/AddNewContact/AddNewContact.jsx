import './AddNewContact.css'
import { useContext } from 'react'
import { ContactListContext } from '../../Contexts/ContactListContext'

const AddNewContact = ({ onClose }) => {
    const { addNewContact } = useContext(ContactListContext)

    function onFormSubmit(event) {
        event.preventDefault();
        const nombre = event.target.nombre.value;
        const apellido = event.target.apellido.value;
        const telefono = event.target.telefono.value;
        if (nombre.trim() === '' || apellido.trim() === '' || telefono.trim() === '') return;
        addNewContact(nombre);
        onClose();
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h2>Nuevo Contacto</h2>
                <form onSubmit={onFormSubmit}>
                    <input name="nombre" type="text" placeholder="Nombre" autoFocus />
                    <input name="apellido" type="text" placeholder="Apellido" />
                    <input name="telefono" type="text" placeholder="Telefono" />
                    <button type="submit">Agregar</button>
                </form>
            </div>
        </div>
    )
}

export default AddNewContact