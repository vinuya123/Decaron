import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext)
  const navigate = useNavigate()

  // 🧩 Safety check in case cart is not yet loaded
  if (!cart) return <div className="text-center text-white mt-10">Loading cart...</div>

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-lg opacity-80">Your cart is empty 🛒</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* 🛍️ Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center bg-white/10 p-4 rounded-xl shadow-md">
                  <img
                    src={item.image || '/placeholder.png'} // fallback in case image is missing
                    alt={item.name || 'Product'}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold">{item.name || 'Unnamed Product'}</h3>
                    <p className="text-gray-300">₱{Number(item.price || 0).toFixed(2)}</p>
                    <p className="text-sm opacity-70">Qty: {item.quantity || 1}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="mt-6 text-red-500 hover:text-red-700 transition underline"
              >
                Clear Cart
              </button>
            </div>

            {/* 💳 Summary */}
            <div className="bg-white/10 p-6 rounded-xl shadow-md h-fit">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <p className="flex justify-between text-lg">
                <span>Total:</span>
                <span className="font-bold">
                  ₱{Number(getTotalPrice() || 0).toFixed(2)}
                </span>
              </p>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full mt-6 bg-white text-[#302b63] font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
