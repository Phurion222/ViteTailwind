import React, {useContext} from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCarContext } from '../../context';

function ProductDetail() {

    const context = useContext(ShoppingCarContext);
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-80px)] top-[68px] flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between item-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div onClick={() => context.closeDetailProduct()} className='cursor-pointer'><XCircleIcon className='size-6'/></div>
        </div>
        <figure>
            <img className='w-full h-full rounded-lg' src={context.productToShow.image} alt={context.productToShow.title} />
        </figure>
        <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
            <span className='font-medium text-md'>${context.productToShow.title}</span>
            <span className='font-light text-sm'>${context.productToShow.description}</span>
        </p>
    </aside>
  )
}

export default ProductDetail