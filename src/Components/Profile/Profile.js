import React from 'react'
import {Link} from "react-router-dom";
import './profile.css'


const Profile = () => {
  return (
    <div className='bg'>
    <div className='over' >
       <h1 className='heading'>கண்காணிப்பு</h1> 
      
      <Link to='/Sizeandweight'>
        <div className='button'>
            <button className='text'>என் குழந்தை 👼</button>
        </div>
      </Link>
      <Link to='/Feed'>
        <div className='button'>
            <button className='text'>குழந்தை பாலூட்டல் 👨‍🍼</button>
        </div>
      </Link>
      <Link to='/Poop'>
        <div className='button'>
            <button className='text'>மலம் 💩</button>
        </div>
      </Link>
      
      
    </div>
    </div>
    
  )
}

export default Profile 
