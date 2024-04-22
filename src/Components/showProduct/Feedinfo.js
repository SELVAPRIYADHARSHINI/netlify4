import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../showProduct/showProduct.css';

const Feedinfo = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/breastfeed-detail/');
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
                        <th>startTime</th>
                        <th>stopTime</th>
                        <th>breastSide</th>
                        <th>supplement</th>
                        <th>painLevel</th>
                        <th>nippleShape</th>
                        <th>nippleColor</th>
                        <th>milkBlister</th>
                        <th>nippleCracks</th>
                        <th>feelings</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.startTime}</td>
                            <td>{product.stopTime}</td>
                            <td>{product.breastSide}</td>
                            <td>{product.supplement}</td>
                            <td>{product.painLevel}</td>
                            <td>{product.nippleShape}</td>
                            <td>{product.nippleColor}</td>
                            <td>{product.milkBlister ? 'Yes' : 'No'}</td>
                            <td>{product.nippleCracks ? 'Yes' : 'No'}</td>
                            <td>{product.feelings}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Feedinfo;
