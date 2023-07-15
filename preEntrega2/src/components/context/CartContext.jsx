import React, { createContext, useState, useEffect } from 'react';
import { products } from '../productosMock';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const [total, setTotal] = useState(0);

    const addToCart = (newItem) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };

            if (updatedItems[newItem.id]) {
                updatedItems[newItem.id] += newItem.quantity;
            } else {
                updatedItems[newItem.id] = newItem.quantity;
            }

            return updatedItems;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };

            if (updatedItems[itemId]) {
                updatedItems[itemId] -= 1;

                if (updatedItems[itemId] === 0) {
                    delete updatedItems[itemId];
                }
            }

            return updatedItems;
        });
    };

    useEffect(() => {

        let totalAmount = 0;

        Object.entries(cartItems).forEach(([itemId, quantity]) => {
            const product = products.find((product) => product.id === parseInt(itemId));

            if (product) {
                totalAmount += product.price * quantity;
            }
        });

        setTotal(totalAmount);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, total, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};


export default CartProvider