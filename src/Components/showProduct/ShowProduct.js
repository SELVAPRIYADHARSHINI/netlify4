import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../showProduct/showProduct.css'

const ShowProduct = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/product/');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Sex</th>
                        <th>Premature</th>
                        <th>Weight</th>
                        <th>Height</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.date}</td>
                            <td>{product.sex}</td>
                            <td>{product.Premature}</td>
                            <td>{product.weight}</td>
                            <td>{product.height}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowProduct;
 