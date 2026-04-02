import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Add, Remove } from '../features/WishlistSlice';
const WishlistPage = () => {
    const wishlist = useSelector((state) => state.wishlist.Wishlist);
    const dispatch = useDispatch();

    return (
        <div>
            {
                wishlist.map((prod) => (
                    <div key={prod.id}>
                        <img src={prod.images[0]} alt="" />
                        <h1>{prod.title}</h1>
                        <button onClick={() => dispatch(Remove(prod.id))}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default WishlistPage
