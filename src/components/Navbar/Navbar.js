import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 style={{ color: 'red'}}>Skate Sitges</h1>
            <button className='boton'>Zapatillas</button>
            <button className='boton'>Remeras</button>
            <button className='boton'>Gorras</button>
        </nav>

    )
}

export default Navbar