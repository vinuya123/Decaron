import { MapPin } from 'lucide-react'
import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { CartContext } from '../context/CartContext' // ✅ Import CartContext

const Navbar = () => {
    const location = false
    const { cart } = useContext(CartContext) // ✅ Access cart from context

    // ✅ Count total number of items (including quantities)
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)

    return (
        <div className='bg-white py-3 shadow-2xl'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                {/* logo section */}
                <div className='flex gap-7 items-center'>
                    <Link to={'/'}><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif'>D</span>ecaron</h1></Link>
                    <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
                        <MapPin className='text-red-500' />
                        <span className='font-semibold'>
                            {location ? <div></div> : "#1 Holy Angel St, Angeles, 2009 Pampanga"}
                        </span>
                    </div>
                </div>

                {/* navigation menu */}
                <nav className='flex gap-7 items-center'>
                    <ul className='flex gap-7 items-center text-xl font-semibold'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Home</li></NavLink>
                        <NavLink to={'/products'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Products</li></NavLink>
                        <NavLink to={'/about'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>About</li></NavLink>
                        <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Contact</li></NavLink>
                    </ul>

                    {/* ✅ Cart icon with badge */}
                    <Link to={'/cart'} className='relative'>
                        <IoCartOutline className='h-7 w-7' />
                        {totalItems > 0 && (
                            <span className='bg-red-500 px-2 text-sm rounded-full absolute -top-3 -right-3 text-white'>
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    {/* ✅ User section */}
                    <div>
                        <SignedIn>
                            <UserButton afterSignOutUrl='/' />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className='text-red-500 font-semibold cursor-pointer'>Sign In</button>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
