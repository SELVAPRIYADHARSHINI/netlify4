import React, { useState, useEffect } from 'react';
import  './poop.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function Poop() {
  const navigate = useNavigate(); 
  const [time, setTime] = useState('');
  const [colour, setColour] = useState('');
  const [texture, setTexture] = useState('');
  const [size, setSize] = useState('');
  const [ParentName, setParentName] = useState('');

  useEffect(() => {
    const storedParentName = localStorage.getItem('P');
    if (storedParentName) {
      setParentName(storedParentName);
    }
  }, []);

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleColourChange = (e) => {
    setColour(e.target.value);
  };

  const handleTextureChange = (e) => {
    setTexture(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleParentNameChange = (event) => {
    const newName = event.target.value;
    setParentName(newName);
    localStorage.setItem('P', newName);
  };

  const Addproductinfo = async () => {
    let formField = new FormData();
    formField.append('time', time);
    formField.append('colour', colour);
    formField.append('texture', texture);
    formField.append('size', size);
    formField.append('ParentName', ParentName);

    try {
      const response = await axios.post('http://localhost:8000/api/poop_detail/', formField);
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOkClick = (event) => {
    event.preventDefault();   
    console.log('Time:', time);
    console.log('Colour:', colour);
    console.log('Texture:', texture);
    console.log('Size:', size);
  };

  return (
    <div className="poop-form">
      <div>
        <h2>குழந்தை👶</h2>
      </div>
      <form onSubmit={handleOkClick}>
      <div>
          <label htmlFor="P">பெற்றோர் பெயர்:</label>
          <input type="text" id="P" value={ParentName} onChange={handleParentNameChange} />
        </div>
        <div>
          <label htmlFor="time">உங்கள் குழந்தை எப்போது மலம் கழித்தது?</label>
          <input type="time" id="time" value={time} onChange={handleTimeChange} />
        </div>

        <div>
          <label htmlFor="colour">குழந்தை மலத்தின் நிறம் என்ன?</label>
          <select id="colour" value={colour} onChange={handleColourChange}>
            <option value="">தேர்ந்தெடு </option>
            <option value="verydark">மிகவும் இருண்ட நிறம்</option>
            <option value="green">பச்சை நிறம்</option>
            <option value="darkbrown">அடர் பழுப்பு நிறம்</option>
            <option value="mustard">கடுகு நிறம்</option>
            <option value="other">மற்ற நிறம்</option>
          </select>
        </div>
        <div>
          <label htmlFor="texture"> குழந்தை மலத்தின் அமைப்பு என்ன?</label>
          <select id="texture" value={texture} onChange={handleTextureChange}>
            <option value="">தேர்ந்தெடு </option>
            <option value="liquid">திரவம் </option>
            <option value="pasty">பேஸ்டி </option>
            <option value="hard">கடினமான</option>
            <option value="snotty">ஸ்நாட்டி</option>
            <option value="bloody">இரத்தம் தோய்ந்த</option>
          </select>
        </div>
        <div>
          <label htmlFor="size">குழந்தை மலத்தின் அளவு என்ன?</label>
          <select id="size" value={size} onChange={handleSizeChange}>
            <option value="">தேர்ந்தெடு </option>
            <option value="coin">நாணயத்தின் அளவு</option>
            <option value="tablespoon">தேக்கரண்டி அளவு</option>
            <option value="bigger">பெரிய அளவு </option>
          </select>
        </div>

        <button onClick={Addproductinfo}>சரி</button>
      </form>
    </div>
  );
}

export default Poop;
