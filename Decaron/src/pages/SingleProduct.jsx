import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import api from "../api/axios";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products`);
        const found = res.data.find((p) => p.id === parseInt(id));
        setProduct(found);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-800 dark:text-white">
        Loading product...
      </div>
    );
  }

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
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {product.description}
            </p>
            <p className="text-2xl font-semibold mb-6">
              ₱{product.price.toFixed(2)}
            </p>

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
