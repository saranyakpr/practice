import React, { useContext } from 'react'
import products from './Data'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { UserContext } from './UserContext'

const Home = () => {

    const {addToCart} = useContext(UserContext);

  return (
    <div className='grid grid-cols-3 gap-5 mt-5'>
      {products.map((val)=>(
        <div key={val.id}>
            <div>
                <img src={val.img} alt={val.name} className='w-full h-50 object-cover' />
            </div>
            <div className='flex justify-between mt-5'>
                <h2>{val.name}</h2>
                <h2>{val.price}</h2>
                <FaShoppingCart className='cursor-pointer' onClick={()=>addToCart(val)} />
                <FaHeart className='cursor-pointer' />
            </div>
        </div>
      ))}
    </div>
  )
}

export default Home
