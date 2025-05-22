const Cart = ({cartItems}) => 
{
    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (<p>El carrito esta vacio</p>) : 
            (<ul>
                {cartItems.map((item, index)=>(<li key={index}>{item.name}- {item.price}</li>))}
            </ul>)}
        </div>
    )
}
export default Cart;