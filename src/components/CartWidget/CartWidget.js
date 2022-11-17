import './Cartwidget.css';

const CartWidget = () => {
    return (
        <button className = 'bImg'>
            <img className = 'imagen' src ={'../imagenes/carrito.png'} alt='cart-widget'/>
            <p className = 'count'> 15 </p>
        </button>

    )
}

export default CartWidget;