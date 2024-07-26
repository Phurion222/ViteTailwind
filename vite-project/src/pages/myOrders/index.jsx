import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCarContext } from '../../context'
import OrdersCard from '../../components/ordersCard'


function MyOrders() {
  const context = useContext(ShoppingCarContext);
  return (
    <div>
      <div className='flex items-center justify-center w-80 relative'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      { context.order.map((order, index) => (
        <Link key={index} to={`/my-order/${index}`}>
          <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
        </Link>
      ))}
    </div>
  )
}

export default MyOrders