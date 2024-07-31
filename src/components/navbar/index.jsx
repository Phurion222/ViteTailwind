import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { ShoppingCarContext } from "../../context";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
     const activeStyle = "underline underline-offset-8";
     const context = useContext(ShoppingCarContext);
     return (
          <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
                <ul className="flex items-center gap-3">
                     <li className="font-semibold text-lg"><NavLink to="/" onClick={() => context.setSearchItemByCategory('')}>Shopi</NavLink></li>
                     <li><NavLink to="/" className={({isActive}) => isActive ? activeStyle : undefined } onClick={() => context.setSearchItemByCategory('')}>All</NavLink></li>
                     <li><NavLink to="/clothes" className={({isActive}) => isActive ? activeStyle : undefined } onClick={() => context.setSearchItemByCategory('clothing')}>Clothes</NavLink></li>
                     <li><NavLink to="/electronics" className={({isActive}) => isActive ? activeStyle : undefined } onClick={() => context.setSearchItemByCategory('electronics')}>Electronics</NavLink></li>
                     <li><NavLink to="/furnitures" className={({isActive}) => isActive ? activeStyle : undefined } onClick={() => context.setSearchItemByCategory('furnitures')}>Furnitures</NavLink></li>
                     <li><NavLink to="/toys" className={({isActive}) => isActive ? activeStyle : undefined } onClick={() => context.setSearchItemByCategory('toys')}>Toys</NavLink></li>
                     <li><NavLink to="/others" className={({isActive}) => isActive ? activeStyle : undefined } onClick={() => context.setSearchItemByCategory('others')}>Others</NavLink></li>
                </ul>
                <ul className="flex items-center gap-3">
                     <li className="text-black/60">gato@uabc.com</li>
                     <li><NavLink to="/my-orders" className={({isActive}) => isActive ? activeStyle : undefined }>My Orders</NavLink></li>
                     <li><NavLink to="/my-account" className={({isActive}) => isActive ? activeStyle : undefined }>My Account</NavLink></li>
                     <li><NavLink to="/sign-in" className={({isActive}) => isActive ? activeStyle : undefined }>Sign In</NavLink></li>
                     <li className='flex justify-center items-center'>
                          <ShoppingBagIcon className='size-6'/>
                          <div>{context.cartProducts.length}</div>
                     </li>
                </ul>
          </nav>
     )
}

export default Navbar;