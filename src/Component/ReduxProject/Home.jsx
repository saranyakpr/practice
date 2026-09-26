import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import products from '../Context/Data'
import { useDispatch } from 'react-redux'
import { addToCart } from './cartSlice';

const Home = () => {

    const dispatch = useDispatch();

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
                <FaShoppingCart className='cursor-pointer' onClick={()=>dispatch(addToCart(val))} />
                <FaHeart className='cursor-pointer' />
            </div>
        </div>
      ))}
    </div>
  )
}

export default Home
