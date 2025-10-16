import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    payment: 'cod',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      alert("Please fill out all required fields.")
      return
    }

    alert(`✅ Order placed successfully!\nThank you, ${formData.name}!`)
    clearCart()
    navigate('/') // Redirect to homepage after checkout
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
        <h2 className="text-2xl mb-4">Your cart is empty 🛒</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-white text-[#302b63] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Return to Shop
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 bg-white/10 p-6 rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>

            <div>
              <label className="block text-sm opacity-80 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-black"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm opacity-80 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-black"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm opacity-80 mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-black"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label className="block text-sm opacity-80 mb-1">Shipping Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-black"
                placeholder="Enter your complete address"
                rows="3"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm opacity-80 mb-1">Payment Method</label>
              <select
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-black"
              >
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit / Debit Card</option>
                <option value="gcash">GCash</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-[#302b63] font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Place Order
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-white/10 p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm opacity-90">
                  <span>{item.title} × {item.quantity}</span>
                  <span>₱{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <p className="flex justify-between text-lg font-semibold border-t border-white/20 pt-4">
              <span>Total:</span>
              <span>₱{getTotalPrice().toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
