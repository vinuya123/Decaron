import React from 'react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("✅ Your message has been sent! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center text-white px-6">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg">
          Have questions or need support? We'd love to hear from you! Fill out the form below or reach us through our email.
        </p>

        {/* ✅ Form with alert on submit */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 p-6 rounded-2xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-white text-[#302b63] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>

        <p className="text-sm opacity-80">
          Or email us directly at <span className="font-semibold">support@shopnow.com</span>
        </p>
      </div>
    </div>
  )
}

export default Contact
