import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const cartDetails = useSelector((state)=>state.cart.cartItems);
    console.log(cartDetails);

    const nav = useNavigate();

  return (
    <div className='flex justify-between'>
      <div onClick={()=>nav('/')} className="cursor-pointer">
        logo
      </div>
      <div>
        <input type="search" placeholder='search here...' />
      </div>
      <div className='flex gap-5'>
        <div onClick={()=>nav('/cart')} className="cursor-pointer">
            <FaShoppingCart />
            <span>{cartDetails.length}</span>
        </div>
        <FaHeart />
      </div>
    </div>
  )
}

export default Navbar
