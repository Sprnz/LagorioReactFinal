import React from 'react';
import { products } from '../../productosMock';

const Brief = ({ cartItems, total }) => {

    return (
        <div>

            {Object.entries(cartItems).map(([itemId, quantity]) => {
                const product = products.find((product) => product.id === parseInt(itemId));

                if (product) {
                    return (
                        <div key={itemId}>
                            <p>{product.title} X {quantity}</p>
                            <p>Subtotal: ${product.price * quantity}</p>
                        </div>
                    );
                }

                return null;
            })}

            <h3>Total: ${total}</h3>
        </div>

    );
};

export default Brief;
