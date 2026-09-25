import React, { useContext } from 'react'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { UserContext } from './UserContext';

const Navbar = () => {

    const {cart} = useContext(UserContext);
    console.log(cart.length);

  return (
    <div className='flex justify-between'>
      <div>
        logo
      </div>
      <div>
        <input type="search" placeholder='search here...' />
      </div>
      <div className='flex gap-5'>
        <FaShoppingCart />
        <FaHeart />
      </div>
    </div>
  )
}

export default Navbar
