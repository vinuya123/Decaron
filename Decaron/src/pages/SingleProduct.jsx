import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
    { id: 1, name: "Knie", price: 49.99, image: "/images/banner1.jpg", description: "Just like Nike — if Nike was made by your cousin in his garage." },
    { id: 2, name: "Hike", price: 89.99, image: "/images/banner2.jpg", description: "Conquer mountains, or at least the stairs to your room." },
    { id: 3, name: "Nkie", price: 39.99, image: "/images/banner3.jpg", description: "The spirit of running... but slower, cheaper, and slightly off-brand." },
    { id: 4, name: "Prongles", price: 59.99, image: "/images/banner4.jpeg", description: "Once you pop, you’ll question every snack choice you’ve ever made." },
    { id: 5, name: "Dave", price: 499.99, image: "/images/banner5.jpeg", description: "Nobody knows what it is. Everyone knows it’s powerful. Be like Dave." },
    { id: 6, name: "Nut Master", price: 29.99, image: "/images/banner6.jpg", description: "For true professionals in the art of spreading joy (and peanuts)." },
    { id: 7, name: "Crust", price: 19.99, image: "/images/banner7.jpg", description: "The bread that stayed behind. Tough, chewy, and oddly inspiring." },
    { id: 8, name: "WhatsApp Perfume", price: 24.99, image: "/images/banner8.jpg", description: "Smells like typing... and then not replying." },
    { id: 9, name: "Mike Glove", price: 149.99, image: "/images/banner9.jpg", description: "The glove that punches back — mostly your wallet." },
    { id: 10, name: "Game Pudding", price: 89.99, image: "/images/banner10.jpg", description: "Fuel your next gaming session with 100% pudding-based energy." },
    { id: 11, name: "Surprise", price: 59.99, image: "/images/banner11.jpg", description: "You won’t know what it is. We won’t either. That’s the fun part." },
    { id: 12, name: "The North Fake", price: 99.99, image: "/images/banner12.jpg", description: "Adventure-ready jacket for people who only hike to Starbucks." },
    { id: 13, name: "H&M", price: 79.99, image: "/images/banner13.jpg", description: "Hot & Mid — perfect for three washes before retirement." },
    { id: 14, name: "Cereo", price: 119.99, image: "/images/banner14.jpg", description: "Now with 20% more air and 0% real cereal integrity." },
    { id: 15, name: "FrostedFlakes", price: 39.99, image: "/images/banner 15.jpg", description: "They’re fine. Tony’s distant cousin Terry approves." },
    { id: 16, name: "Peepi", price: 34.99, image: "/images/banner 16.jpg", description: "Hydration so cold, it might end friendships." },
    { id: 17, name: "SpiderMan Toy", price: 69.99, image: "/images/banner 17.jpg", description: "Shoots webs. Or maybe string cheese. We’re not sure anymore." },
    { id: 18, name: "Sqny", price: 44.99, image: "/images/banner 18.jpg", description: "Experience sound so generic, it’s almost nostalgic." },
    { id: 19, name: "Crispy Hexagons", price: 24.99, image: "/images/banner 19.jpg", description: "The perfect cereal for people who hate circles and flavor." },
    { id: 20, name: "Leog", price: 49.99, image: "/images/banner 20.jpg", description: "Build creativity. Step on one. Regret every decision." },
    { id: 21, name: "KatKot", price: 199.99, image: "/images/banner 21.jpg", description: "For short videos and shorter attention spans." },
    { id: 22, name: "Baby Yuda", price: 129.99, image: "/images/banner 22.jpg", description: "Cuter than copyright law allows." },
    { id: 23, name: "Calvin Klain", price: 59.99, image: "/images/banner 23.jpg", description: "Underwear so fake it’s emotionally honest." },
    { id: 24, name: "The Incredible SpiderBat", price: 299.99, image: "/images/banner 24.jpg", description: "Half bat, half spider, fully lawsuit material." },
    { id: 25, name: "Under Arms", price: 349.99, image: "/images/banner 25.jpg", description: "Smells like determination and mild regret." },
    { id: 26, name: "Viotcrla, S Secrete", price: 89.99, image: "/images/banner 26.jpg", description: "It’s not Victoria’s, but the mystery remains." },
    { id: 27, name: "Marshmallows&Stars", price: 69.99, image: "/images/banner 27.jpg", description: "Breakfast of champions — and confused astronauts." },
    { id: 28, name: "Crocodile", price: 159.99, image: "/images/banner 28.jpg", description: "Elegance, power, and a logo that might bite back." },
];


const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-gray-800 dark:text-white">
                <h1 className="text-2xl font-bold mb-4">Product not found</h1>
                <button
                    onClick={() => navigate("/products")}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Back to Products
                </button>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
            <div className="container mx-auto px-6">
                <button
                    onClick={() => navigate("/products")}
                    className="mb-6 text-sm text-gray-600 dark:text-gray-300 hover:underline"
                >
                    ← Back to Products
                </button>

                <div className="flex flex-col md:flex-row gap-10 items-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full md:w-1/2 h-[400px] object-cover rounded-xl shadow-md"
                    />

                    <div className="flex-1 text-gray-800 dark:text-white">
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
                        <p className="text-2xl font-semibold mb-6">₱{product.price.toFixed(2)}</p>

                        <button
                            onClick={() => addToCart(product)}
                            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition cursor-pointer"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
