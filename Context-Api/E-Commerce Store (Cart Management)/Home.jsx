import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const url = "https://fakestoreapi.com/products";

    const [products, setProduct] = useState([]);
    const navigate = useNavigate();

    async function fetchApi() {
        try {
            const res = await axios.get(url);
            setProduct(res.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchApi();
    }, []);

    const { addToCart } = useContext(CartContext);

    return (
        <div className="home-container">
            <div className="navbar">
                <h2>🛍️ My Store</h2>
                <button className="cart-btn" onClick={() => navigate('/cart')}>
                    Go To Cart 🛒
                </button>
            </div>

            <h1 className="heading">Explore Products</h1>

            <div className="product-grid">
                {products.map((item) => (
                    <div className="product-card" key={item.id}>
                        <div className="image-box">
                            <img src={item.image} alt="" />
                        </div>

                        <h4 className="title">{item.title}</h4>

                        <p className="price">₹{item.price}</p>

                        <button
                            className="add-btn"
                            onClick={() => {
                                addToCart(item);

                                toast.success("🛒 Item added!", {
                                    position: "top-right",
                                    autoClose: 1500,
                                    theme: "dark"
                                });
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Home;