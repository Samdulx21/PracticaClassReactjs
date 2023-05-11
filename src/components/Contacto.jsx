import React from 'react'

const Contacto = ({ contacto, changeContacto, removeContacto }) => {

    return (
        <div className='contact-component'>
            <h2> {contacto.name} </h2>
            <span> {contacto.email} </span>

            <button
            style={{ backgroundColor: contacto.estado ? 'green' : 'red' }}
            className="state-button"
            onClick={() => {
            changeContacto(contacto);
            }}
            >
                {contacto.estado ? 'Conectado' : 'Desconectado'}
            </button>

            <button className="remove-button" onClick={() => removeContacto(contacto)}>
                Borrar
            </button>
        </div>
    )
}

export default Contacto