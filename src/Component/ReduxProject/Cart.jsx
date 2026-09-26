import { useSelector } from "react-redux";

const Cart = () => {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <div>

      <h1>Cart</h1>

      {cartItems.map((val) => (

        <div key={val.id}>

          <img
            src={val.img}
            alt={val.name}
            width="100"
          />

          <h2>{val.name}</h2>

          <p>{val.price}</p>

        </div>

      ))}

    </div>
  );
};

export default Cart;