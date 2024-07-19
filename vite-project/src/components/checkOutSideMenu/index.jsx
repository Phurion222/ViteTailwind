import React, { useContext } from 'react'
import { ShoppingCarContext } from '../../context'
import { XCircleIcon } from '@heroicons/react/24/solid'
import OrderCard from '../orderCard';

function CheckOutSideMenu() {
    const context = useContext(ShoppingCarContext);

  return (
    <aside className={`${context.isCheckOutOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-80px)] top-[68px] flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between item-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div onClick={() => context.closeCheckOut()} className='cursor-pointer'><XCircleIcon className='size-6'/></div>
        </div>
        <div className='px-6 overflow-y-scroll'>
            {context.cartProducts.map(product => (
                <OrderCard key={product.id} title={product.title} price={product.price} imageUrl={product.image}/>
            ))}
        </div>
    </aside>
  )
}

export default CheckOutSideMenu