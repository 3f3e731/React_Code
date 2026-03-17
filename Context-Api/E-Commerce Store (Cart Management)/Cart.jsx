import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price;
    }, 0);
    return (
        <div className="cart-container">
            <h2 className="cart-title">🛒 Your Cart</h2>

            {cart && cart.length === 0 && (
                <p className="empty-cart">Your cart is empty 😔</p>
            )}

            <div className="cart-grid">
                {cart && cart.map((item) => (
                    <div className="cart-card" key={item.id}>
                        <img src={item.image} alt="" />

                        <div className="cart-info">
                            <h4>{item.title}</h4>
                            <p className="price">₹{item.price}</p>

                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                🗑 Remove
                            </button>
                        </div>
                    </div>
                ))}
                <h3>Total: ₹{totalPrice}</h3>
            </div>
        </div>
    );
};

export default Cart;