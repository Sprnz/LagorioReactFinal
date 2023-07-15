import React, { useContext } from 'react';
import { products } from '../../productosMock';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartContainer = () => {
    const { cartItems, total } = useContext(CartContext);

    return (
        <div>
            <h2>Productos agregados al carrito:</h2>
            {Object.entries(cartItems).map(([itemId, quantity]) => {
                const product = products.find((product) => product.id === parseInt(itemId));

                if (product) {
                    return (
                        <div key={itemId}>
                            <p>{product.title}</p>
                            <p>Precio: ${product.price}</p>
                            <p>Cantidad: {quantity}</p>
                        </div>
                    );
                }

                return null;
            })}

            <div>
                <h2>Total de la compra: ${total}</h2>
                <Link to="/checkout">
                    <button>Realizar compra</button>
                </Link>


            </div>
        </div>
    );
};

export default CartContainer;
