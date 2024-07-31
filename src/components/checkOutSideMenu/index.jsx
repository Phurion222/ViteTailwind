import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCarContext } from '../../context'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { totalPrice } from '../../utils';
import OrderCard from '../orderCard';

function CheckOutSideMenu() {
    const context = useContext(ShoppingCarContext);

    const hanldeDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01-02-2024',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setSearchItem(null);
    }

  return (
    <aside className={`${context.isCheckOutOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-80px)] top-[68px] flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between item-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div onClick={() => context.closeCheckOut()} className='cursor-pointer'><XCircleIcon className='size-6'/></div>
        </div>
        <div className='px-6 overflow-y-scroll flex-1'>
            {context.cartProducts.map(product => (
                <OrderCard key={product.id} id={product.id} title={product.title} price={product.price} imageUrl={product.image} handleDelete={hanldeDelete}/>
            ))}
        </div>
        <div className='px-6 mb-6'>
            <p className='flex justify-between items-center'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
            </p>
            <Link to='/my-order/last'>
                <button className='w-full bg-black py-3 text-white' onClick={() => handleCheckout()}>Checkout</button>
            </Link>
        </div>
    </aside>
  )
}

export default CheckOutSideMenu