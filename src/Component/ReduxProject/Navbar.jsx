import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const wishlistItems = useSelector(
    (state) => state.cart.wishlistItems
  );

  return (
    <div className="flex justify-between">

      <div>
        logo
      </div>

      <div>
        <input
          type="search"
          placeholder="search here..."
        />
      </div>

      <div className="flex gap-5">

        <Link to="/cart">
          <div className="relative">

            <FaShoppingCart />

            <span>
              {cartItems.length}
            </span>

          </div>
        </Link>

        <Link to="/wishlist">
          <div className="relative">

            <FaHeart />

            <span>
              {wishlistItems.length}
            </span>

          </div>
        </Link>

      </div>

    </div>
  );
};

export default Navbar;