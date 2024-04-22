import React, { useState, useEffect } from 'react';
import './feed.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function Feed() {
  const navigate = useNavigate(); 
  const [parentName, setParentName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [stopTime, setStopTime] = useState('');
  const [breastSide, setBreastSide] = useState('');
  const [supplement, setSupplement] = useState('');
  const [painLevel, setPainLevel] = useState(0);
  const [nippleShape, setNippleShape] = useState('');
  const [nippleColor, setNippleColor] = useState('');
  const [milkBlister, setMilkBlister] = useState(false);
  const [nippleCracks, setNippleCracks] = useState(false);
  const [feelings, setFeelings] = useState('');

  useEffect(() => {
    const storedParentName = localStorage.getItem('parentName');
    if (storedParentName) {
      setParentName(storedParentName);
    }
  }, []);

  const handleParentNameChange = (event) => {
    const newName = event.target.value;
    setParentName(newName);
    localStorage.setItem('parentName', newName);
  };

  const AddProductInfo = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/breastfeed-detail/', {
        parentName,
        startTime,
        stopTime,
        breastSide,
        supplement,
        painLevel,
        nippleShape,
        nippleColor,
        milkBlister,
        nippleCracks,
        feelings,
      });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(parentName, startTime, stopTime, breastSide, supplement, painLevel, nippleShape, nippleColor, milkBlister, nippleCracks, feelings);
    setParentName('');
    setStartTime('');
    setStopTime('');
    setBreastSide('');
    setSupplement('');
    setPainLevel(0);
    setNippleShape('');
    setNippleColor('');
    setMilkBlister(false);
    setNippleCracks(false);
    setFeelings('');
  };

  return (
    <div>
      <div className='headingfeed'>
    
      <h2>தாய்ப்பால் கொடுக்கும் விபரங்கள்</h2>
    
    
      </div>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="parentName">பெற்றோர் பெயர்:</label>
          <input type="text" id="parentName" value={parentName} onChange={handleParentNameChange} />
        </div>
        <div>
          <label htmlFor="startTime">தொடக்க நேரம்:</label>
          <input type="time" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </div>
        <div>
          <label htmlFor="stopTime">நிறுத்த நேரம்:</label>
          <input type="time" id="stopTime" value={stopTime} onChange={(e) => setStopTime(e.target.value)} />
        </div>
        <div>
          <label htmlFor="breastSide">குழந்தை பாலூட்ட எந்த மார்பகத்தைப் பயன்படுத்தினீர்கள்?</label>
          <select id="breastSide" value={breastSide} onChange={(e) => setBreastSide(e.target.value)}>
            <option value="">தேர்ந்தெடு </option>
            <option value="left">இடது</option>
            <option value="right">வலது</option>
            <option value="both">இரண்டும்</option>
          </select>
        </div>
        <div>
          <label htmlFor="supplement">உங்கள் குழந்தைக்கு எப்படி பால் கொடுத்தீர்கள்?</label>
          <select id="supplement" value={supplement} onChange={(e) => setSupplement(e.target.value)}>
            <option value="">தேர்ந்தெடு </option>
            <option value="breastmilk">தாய்ப்பால்🤱🏻</option>
            <option value="formula">ஃபார்முலா 🍼</option>
          </select>
        </div>
        <div>
          <label htmlFor="painLevel">தாய்ப்பால் கொடுக்கும் போது ஏதேனும் வலியை உணர்ந்தீர்களா?</label>
          <input type="range" id="painLevel" min="0" max="10" value={painLevel} onChange={(e) => setPainLevel(parseInt(e.target.value))} />
          <span>{painLevel} ({painLevel === 0 ? 'வலி இல்லை' : painLevel >= 1 && painLevel <= 3 ? 'குறைந்த வலி' : painLevel >= 4 && painLevel <= 6 ? 'நடுத்தர வலி' : 'அதிக வலி'})</span>
        </div>
        <div>
          <label htmlFor="nippleShape">முலைக்காம்பின் வடிவம் என்ன?</label>
          <select id="nippleShape" value={nippleShape} onChange={(e) => setNippleShape(e.target.value)}>
            <option value="">தேர்ந்தெடு </option>
            <option value="rounded">வட்ட வடிவ முலைக்காம்பு</option>
            <option value="lipstick">லிப்ஸ்டிக் வடிவ முலைக்காம்பு</option>
          </select>
        </div>
        <div>
          <label htmlFor="nippleColor">முலைக்காம்பின் நிறம் என்ன?</label>
          <select id="nippleColor" value={nippleColor} onChange={(e) => setNippleColor(e.target.value)}>
            <option value="">தேர்ந்தெடு </option>
            <option value="regular">வழக்கமான நிறம்</option>
            <option value="white">வெள்ளை நிறம்</option>
            <option value="purple">ஊதா நிறம்</option>
          </select>
        </div>
        <div>
          <label htmlFor="milkBlister">உங்கள் மார்பகங்களில் பால் கொப்புளம் இருக்கிறதா?</label>
          <select id="milkBlister" value={milkBlister} onChange={(e) => setMilkBlister(e.target.value === 'true')}>
            <option value={false}>இல்லை</option>
            <option value={true}>ஆம்</option>
          </select>
        </div>
        <div>
          <label htmlFor="nippleCracks">உங்கள் முலைக்காம்புகளில் ஏதேனும் விரிசல் இருக்கிறதா?</label>
          <select id="nippleCracks" value={nippleCracks} onChange={(e) => setNippleCracks(e.target.value === 'true')}>
            <option value={false}>இல்லை</option>
            <option value={true}>ஆம்</option>
          </select>
        </div>
        <div>
          <label htmlFor="feelings">நீங்கள் எப்படி உணருகிறீர்கள்?</label>
          <select id="feelings" value={feelings} onChange={(e) => setFeelings(e.target.value)}>
            <option value="">தேர்ந்தெடு </option>
            <option value="relaxed">நிம்மதியாக😇</option>
            <option value="happy">மகிழ்ச்சியான உணர்வு😀</option>
            <option value="sad">சோக உணர்வு😔</option>
            <option value="exhausted">தீர்ந்து போன உணர்வு🤯</option>
            <option value="anxious">கவலை உணர்வு😰</option>
          </select>
        </div>
        <button type="submit" onClick={AddProductInfo}>சரி</button>
      </form>
    </div>




  );
}

export default Feed;
