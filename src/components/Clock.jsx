import React, { useEffect, useState } from 'react'

const Clock = () => {

    //* Componente privado
    const estado = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Samuel',
    apellido: 'Dulce Ying'
}

    //* Estado del componente y lo llamamos a travez del useState()
    const [ usuario, setUsuario ] = useState( estado )

    useEffect(() => {
        //* Componente que se va a renderizar
        const intervaleId = setInterval(() => {
            //* Llamar la funcion que toma los objetos para actualizarlo
            updateUser()
        }, 1000)

        return () => {
            //* devolver el componente que se va a renderizar
            clearInterval(intervaleId)
        }
    })
    
    //* Funcion que llama al componente privado
    const updateUser = () => {
        return setUsuario({
            fecha: usuario.fecha,
            edad: usuario.edad + 1,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
        })
    }

    return (
        <div>
            <h2>
                Hora Actual:
                { usuario.fecha.toLocaleTimeString() }
            </h2>
            <h3>{ usuario.nombre } { usuario.apellido }</h3>
            <h1>Edad: { usuario.edad }</h1>
        </div>
    )
}

export default Clock