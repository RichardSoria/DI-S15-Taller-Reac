import React, { useState } from 'react';
import '../styles/tareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
  const [input, setInput] = useState('');

  const manejarCambio = elemento => {
    // console.log('Manejando el cambio');
    setInput(elemento.target.value);
    console.log(elemento.target.value);
  }

  const manejarEnvio = elemento => {
    elemento.preventDefault();
    // console.log('Enviando el formulario...');
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    // console.log(tareaNueva);
    props.onSubmit(tareaNueva);
  }

  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;
