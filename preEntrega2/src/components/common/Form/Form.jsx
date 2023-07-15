import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Brief from '../Brief/Brief';

const Form = () => {

    const { cartItems, total } = useContext(CartContext);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: '',
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const { firstName, lastName, phone, email, confirmEmail } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificar nuevamente las validaciones antes de realizar el submit
        if (isFormValid()) {
            setIsFormSubmitted(true);
        }
    };

    const isFormValid = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d+$/;
        return (
            firstName.length >= 3 &&
            lastName !== '' &&
            phonePattern.test(phone) &&
            emailPattern.test(email) &&
            email === confirmEmail
        );
    };

    return (
        <div>
            {!isFormSubmitted ? (
                <div>
                    <h2>Formulario de compra</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName">Nombre:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">Apellido:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Teléfono:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmEmail">Confirmar E-mail:</label>
                            <input
                                type="email"
                                id="confirmEmail"
                                name="confirmEmail"
                                value={confirmEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" disabled={!isFormValid()}>
                            Realizar compra
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Checkout</h2>
                    <p>¡Gracias por tu compra, {firstName}!</p>
                    <p>Compraste:</p>
                    <Brief cartItems={cartItems} total={total} />


                </div>
            )}
        </div>
    );
};

export default Form;