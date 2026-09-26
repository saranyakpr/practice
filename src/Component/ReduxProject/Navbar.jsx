import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const wishlistItems = useSelector(
    (state) => state.cart.wishlistItems
  );

  const nav = useNavigate();

  return (
    <div className="flex justify-between">

      <div onClick={()=>nav('/')} className="cursor-pointer">
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