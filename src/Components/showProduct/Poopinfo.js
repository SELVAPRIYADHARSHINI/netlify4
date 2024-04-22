import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../showProduct/showProduct.css'


const Poopinfo = () => {
    const [poops, setPoops] = useState([]);

    const getPoops = async () => {
        try {
           
            const response = await axios.get('http://127.0.0.1:8000/api/poop_detail/');
            setPoops(response.data);
        } catch (error) {
            console.error('Error fetching poops:', error);
        }
    };

    useEffect(() => {
        // Fetch data when the component mounts
        getPoops();
    }, []);

    return (
        <div>
            {/* Render the data in a table */}
            <table>
                <thead>
                    <tr>
                        {/* Define table headers */}
                        <th>Time</th>
                        <th>Colour</th>
                        <th>Texture</th>
                        <th>Size</th>
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {/* Map through the poops state and render table rows */}
                    {poops.map((poop, index) => (
                        <tr key={index}>
                            {/* Display poop properties in table cells */}
                            <td>{poop.time}</td>
                            <td>{poop.colour}</td>
                            <td>{poop.texture}</td>
                            <td>{poop.size}</td>
                            {/* Add more table cells for additional properties */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Poopinfo;
