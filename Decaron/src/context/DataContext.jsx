import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const fetchAllProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.in/api/products?limit=150');
            console.log(res);
            const productsData = res.data.products
            setData(productsData);

        } catch (error) {
            console.log(error);
        }
    }
    return <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
        {children}
    </DataContext.Provider>;
}