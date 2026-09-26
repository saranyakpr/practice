import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart
} from "./cartSlice";

const Cart = () => {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="mt-5">
        <h1>Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/" className="underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-5">

      <h1>Cart</h1>

      {cartItems.map((val) => (

        <div
          key={val.id}
          className="flex items-center gap-5 mt-5"
        >

          <img
            src={val.img}
            alt={val.name}
            width="100"
          />

          <h2>{val.name}</h2>

          <p>{val.price}</p>

          <div className="flex gap-3">
            <button onClick={() => dispatch(decreaseQuantity(val.id))}>-</button>
            <span>{val.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(val.id))}>+</button>
          </div>

          <p>{val.price * val.quantity}</p>

          <button onClick={() => dispatch(removeFromCart(val.id))}>
            Remove
          </button>

        </div>

      ))}

      <h2 className="mt-5">Total: {totalPrice}</h2>

    </div>
  );
};

export default Cart;
