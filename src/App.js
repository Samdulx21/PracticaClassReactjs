// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ContactForm from './components/ContactForm';
import Contacto from './components/Contacto';
import Colors from './components/Colors';
// import Clock from './components/Clock';

function App() {

  const contacto = [
    {
      name: 'Samuel',
      email: 'samue@edu.com',
      conectado: true,
    },
    {
      name: 'Camila',
      email: 'kmi@edu.com',
      conectado: true,
    },
    {
      name: 'Marianna',
      email: 'Marinna@edu.com',
      conectado: false,
    }
  ]

  const [ newContact, setNewContact ] = useState(contacto)

  //* Estado del contacto
  function changeContacto (contacto){
    const index = newContact.indexOf(contacto)
    const tempContacto = [...newContact]
    tempContacto[index].estado = !tempContacto[index].estado
    setNewContact(tempContacto)
  }

  //* Eliminar Contacto
  function removeContacto (contacto){
    const index = newContact.indexOf(contacto)
    const tempContacto = [...newContact]
    tempContacto.splice(index, 1)
    setNewContact(tempContacto)
  }

  //* Agregar
  function aggContact (contacto){
    const tempContacto = [...newContact]
    tempContacto.push(contacto)
    setNewContact(tempContacto)
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Clock />
    //   </header>

    // </div>

    // APP Contact 
    // <div className="App">
    //   <h1>Contactos</h1>

    //   <div className="card-container">
    //     {
    //       newContact.map((contacto, index) => {
    //         return (
    //           <Contacto key={index} contacto={contacto} changeContacto={changeContacto} removeContacto={removeContacto} />
    //         )
    //       })
    //     }
    //   </div>
    //     <ContactForm onContact={aggContact}  />
    // </div>

    //App Color
    <div className="App"  style={{ margin: 'auto' }}>
      <Colors />
    </div>
  );
}

export default App;
