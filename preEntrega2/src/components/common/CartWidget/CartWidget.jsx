import React from 'react'
import "./cartWidget.css"

const CartWidget = () => {
    return (
        <div className="cart-container">
            <div className="cart"><p>🛒</p>
            </div>
            <div>
                <p className="notif">0</p>
            </div>
        </div>
    )
}

export default CartWidget