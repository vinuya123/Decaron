import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react' // ✅ Icons

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 cursor-pointer z-10 transition"
    onClick={onClick}
  >
    <ChevronRight className="text-white w-6 h-6" />
  </div>
)

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 cursor-pointer z-10 transition"
    onClick={onClick}
  >
    <ChevronLeft className="text-white w-6 h-6" />
  </div>
)

const Carousel = () => {
  const navigate = useNavigate()

  const slides = [
    {
      id: 1,
      src: "/images/banner1.jpg",
      title: "Knie",
      description: "Comfortable and stylish — perfect for your everyday adventure."
    },
    {
      id: 2,
      src: "/images/banner2.jpg",
      title: "Hike",
      description: "Durable hiking essentials designed for the toughest trails."
    },
    {
      id: 3,
      src: "/images/banner3.jpg",
      title: "Nkie",
      description: "Lightweight and affordable — great for casual wear."
    },
    {
      id: 4,
      src: "/images/banner4.jpeg",
      title: "Prongles",
      description: "Crispy and flavorful chips that make snack time more fun."
    },
    {
      id: 5,
      src: "/images/banner5.jpeg",
      title: "Dave",
      description: "Premium-quality product with exceptional performance and design."
    },
    {
      id: 6,
      src: "/images/banner6.jpg",
      title: "Nut Master",
      description: "Deliciously roasted nuts packed with protein and crunch."
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />, // ✅ Add custom arrows
    prevArrow: <PrevArrow />,
  }

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((item) => (
          <div
            key={item.id}
            className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] cursor-pointer'
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <div className='flex flex-col gap-6 justify-center items-center h-[600px] px-4 text-center text-white'>
              <img
                src={item.src}
                alt={item.title}
                className='h-[400px] object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105'
              />
              <div>
                <h2 className='text-2xl font-semibold mb-2'>{item.title}</h2>
                <p className='max-w-2xl text-sm md:text-base text-gray-200'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
