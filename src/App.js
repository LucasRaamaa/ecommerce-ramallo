import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ListaContainer from './components/ListaContainer/ListaContainer.js'


function App() {
  return (
    <div className="App">
      <Navbar />
      <ListaContainer greeting = ' Bienvenidos a la tienda '/>
    </div>
  );
}

export default App;
