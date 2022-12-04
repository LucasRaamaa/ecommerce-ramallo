import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img className = 'logoImg' src = {'../imagenes/logo.jpg'} alt = 'logo-skt' />
            <h1 className = 'tittle'>Skate Store</h1>
            <Link to = '/' className='boton'>Inicio</Link>
            <Link to = '/category/skate' className='boton'>Skate</Link>
            <Link to = '/category/componentes' className='boton'>Componentes</Link>
            <CartWidget />
        </nav>

    )
}

export default Navbar