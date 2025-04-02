import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const { navigate } = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:w-[450px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'Information'} />
        </div>
        <div className='text-2xl'>
          <p className='font-medium'>Shipping Address</p>
        </div>
        <input type="text" placeholder='Full Name' className='border px-2 py-1' />
        <input type="text" placeholder='Street Address' className='border px-2 py-1' />
        <input type="text" placeholder='City' className='border px-2 py-1' />
        <input type="text" placeholder='State' className='border px-2 py-1' />
        <input type="text" placeholder='Zip Code' className='border px-2 py-1' />
        <input type="text" placeholder='Phone Number' className='border px-2 py-1' />
      </div>
      {/* right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'} />
          {/* Payment method selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border-full${method === 'razorpay' ? 'bg-green-400' : ''} `}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>Cash On Delivery</p>
            </div>
          </div>
        </div>
        <div className='w-full text-end mt-8'>
          <button onClick={() => navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder