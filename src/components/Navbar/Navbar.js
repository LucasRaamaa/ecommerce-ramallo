import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.js';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <img className = 'logoImg' src = {'../imagenes/logo.jpg'} alt = 'logo-skt' />
            <h1 className = 'tittle'>Skate Store</h1>
            <button className='boton'>Inicio</button>
            <button className='boton'>Tienda</button>
            <button className='boton'>Contacto</button>
            <CartWidget />
        </nav>

    )
}

export default Navbar