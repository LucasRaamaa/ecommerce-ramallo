import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ListaContainer from './components/ListaContainer/ListaContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={ <ListaContainer greeting = ' Bienvenidos a la tienda '/> }/>
            <Route path='/items/:itemId' element={ <ItemDetailContainer/> } />
            <Route path='/category/:categoryId' element={ <ListaContainer/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



// style={{ backgroundImage: "url(/imagenes/fondo.jpg)" }}

export default App;
