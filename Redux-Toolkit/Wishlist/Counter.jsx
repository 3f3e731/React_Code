import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Add, Remove } from '../features/WishlistSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const Counter = () => {
    const api = "https://dummyjson.com/products";

    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const wishlist = useSelector((state) => state.wishlist.Wishlist)
    const dispatch = useDispatch();

    async function fetchApi() {
        try {
            const res = await axios.get(api);
            setData(res.data.products);
        }
        catch (e) {
            setError("Please check code!")
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchApi()
        }, 500)
        return () => clearTimeout(timer)
    }, [])

    function toggleProduct(product) {
        const exists = wishlist.find(item => item.id === product.id)

        if (exists) {
            dispatch(Remove(product.id));
        }
        else {
            dispatch(Add(product));
        }
    }
    return (
        <div>
            <h1>Wishlist page</h1>
            {
                data.map((product) => {
                    const isLiked = wishlist.some((item) => item.id === product.id)
                    return (
                        <div key={product.id}>
                            <div>
                                <img src={product.images[0]} alt="" />

                                <div onClick={() => toggleProduct(product)}>
                                    <FontAwesomeIcon
                                        icon={isLiked ? solidHeart : regularHeart}
                                    />
                                </div>
                            </div>
                            <h3>{product.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Counter
