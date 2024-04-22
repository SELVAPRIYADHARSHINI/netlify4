import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './sizeandweight.css';

function SizeAndWeight() {
  const navigate = useNavigate();

  const [parentName, setParentName] = useState('');
  const [babyDetails, setBabyDetails] = useState({
    name: '',
    sex: '',
    premature: '',
    date: '',
    weight: '',
    height: ''
  });

  useEffect(() => {
    const storedParentName = localStorage.getItem('parentName');
    if (storedParentName) {
      setParentName(storedParentName);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBabyDetails({
      ...babyDetails,
      [name]: value
    });
  };

  const handleParentNameChange = (event) => {
    const newName = event.target.value;
    setParentName(newName);
    localStorage.setItem('parentName', newName);
  };

  const Addproductinfo = async () => {
    let formField = new FormData();
    formField.append('parentName', parentName);
    formField.append('name', babyDetails.name);
    formField.append('sex', babyDetails.sex);
    formField.append('premature:', babyDetails.premature);
    formField.append('date', babyDetails.date);
    formField.append('weight', babyDetails.weight);
    formField.append('height', babyDetails.height);

    try {
      const response = await axios.post('http://localhost:8000/api/product/', formField);
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(babyDetails);
    setBabyDetails({
      name: '',
      sex: '',
      premature: '',
      date: '',
      weight: '',
      height: ''
    });
  };

  return (
    <div className='size-and-weight'>
      <h2>குழந்தை தகவல்👶</h2>
      <form onSubmit={handleSubmit}>
      <br />
        <label>
          பெற்றோர் பெயர்:
          <input className='input'
            type="text"
            name="parentName"
            value={parentName}
            onChange={handleParentNameChange}
          />
        </label>
        <br />
        
        <label>

          பெயர்:
          <input className='input'
            type="text"
            name="name"
            value={babyDetails.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          பிறந்த நாள்:
          <input className='input'
            type="date"
            name="date"
            value={babyDetails.date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          பாலினம்:
          <select
            className='input'
            id="sex"
            name="sex"
            value={babyDetails.sex}
            onChange={handleInputChange}
          >
            <option value="girl">பெண்</option>
            <option value="boy">ஆண்</option>
          </select>
        </label>
        <label>
          <br />
          முன்கூட்டிய பிறப்பு:
          <select
            className='input'
            id="premature"
            name="premature"
            value={babyDetails.premature}
            onChange={handleInputChange}
          >
            <option value="0">இல்லை</option>
            <option value="1">ஆம்</option>
          </select>
        </label>

        <br />
        <label>
          பிறப்பு எடை:
          <input className='input'
            type="text"
            name="weight"
            placeholder="குழந்தையின் எடை என்ன?"
            value={babyDetails.weight}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          பிறப்பு உயரம்:
          <input className='input'
            type="text"
            name="height"
            placeholder="குழந்தையின் உயரம் என்ன?"
            value={babyDetails.height}
            onChange={handleInputChange}
          />
        </label>
       
        <button type="submit" onClick={Addproductinfo}>சரி</button>
      </form>
    </div>
  );
}

export default SizeAndWeight;
