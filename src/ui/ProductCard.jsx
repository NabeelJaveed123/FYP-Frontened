import {  FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default  function Product({ image , name , description , price , id , children  }) {
     return(
        <Link to={`/product/${id}`}>
        
    <div className='relative flex-1 transition duration-200 hover:translate-y-0.5 hover:shadow-lg'>
        <img src={image} alt='product-img' className='w-1/2 block m-auto mb-4' />
        <div className='m-8'>
            <h3 className='text-xl font-bold'>{name}</h3>
            <p className='text-sm'>{description}</p>
            <div className='flex justify-between items-center mt-6'>
                <div className='text-lg font-semibold '>${price}</div>
                <FaHeart fill='red' size={"20px"} className='absolute right-0 m-4 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
            </div>
            <div className='displayStack__2 mt-2'>
                <button type="button" class="text-white w-full bg-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add To Cart</button>
            </div>
            {children}
        </div>
    </div>


        </Link>
     )
 }