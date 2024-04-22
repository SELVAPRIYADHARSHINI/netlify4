import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config'; // Import the auth object from firebase config
import './viewdetail.css';

const Viewdetail = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      navigate('/Login'); // Redirect to the login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className='all'>
      <div className='in'>
        <h1 className='heading'>கண்காணிப்பு</h1>
        <div className="logout-button">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
        <Link to='/ShowProduct'>
          <div className='but'>
            <button className='txt'>என் குழந்தை 👼</button>
          </div>
        </Link>
        <Link to='/Feedinfo'>
          <div className='but'>
            <button className='txt'>குழந்தை பாலூட்டல் 👨‍🍼</button>
          </div>
        </Link>
        <Link to='/Poopinfo'>
          <div className='but'>
            <button className='txt'>மலம் 💩</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Viewdetail;
