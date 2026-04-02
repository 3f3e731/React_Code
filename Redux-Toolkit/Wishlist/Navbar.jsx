import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const wishlist = useSelector((state) => state.wishlist.Wishlist)
    return (
        <nav className="navbar">

            <div className="logo">ShopSphere</div>

            <div className="nav-links">

                <Link to="/" className="nav-item">
                    Home
                </Link>

                <Link to="/wishlist" className="nav-item wishlist-link">
                    Wishlist

                    <span className="badge">
                        {wishlist.length}
                    </span>
                </Link>

            </div>

        </nav>
    )
}

export default Navbar