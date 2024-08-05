import './App.css';
import logo from './images/logo.png';
// import Tarea from './componentes/Tareas'
import TareaFormulario from './components/TareaFormulario';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img 
          src={logo} 
          className='logo-epn' 
          alt='logo' 
        />
      </div>
      <div className='lista-tareas'>
        <h1>Lista de Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
