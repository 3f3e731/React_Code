import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        setCart([...cart, product]);
    }

    function removeFromCart(id) {
        setCart(prev => prev.filter(pro => pro.id !== id));
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}