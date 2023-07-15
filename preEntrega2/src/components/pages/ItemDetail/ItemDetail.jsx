import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../productosMock';
import { CartContext } from '../../context/CartContext';

const ItemDetail = () => {
    const { productId } = useParams();
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const product = products.find((product) => product.id === parseInt(productId));

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            const newItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: quantity,
            };

            addToCart(newItem);
            setQuantity(0);

            console.log('Producto agregado al carrito:', newItem);
        }
    };

    return (
        <div>
            {product ? (
                <div>
                    <h2>Detalles del producto: {product.title}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <p>Material: {product.category}</p>
                    <button onClick={handleDecrement}>➖</button>
                    <p>{quantity}</p>
                    <button onClick={handleIncrement}>➕</button>
                    <button onClick={handleAddToCart}>Agregar al carrito</button>
                    <Link to="/cart">Ir al carrito</Link>
                </div>
            ) : (
                <p>El producto no se encontró.</p>
            )}
        </div>
    );
};

export default ItemDetail;
