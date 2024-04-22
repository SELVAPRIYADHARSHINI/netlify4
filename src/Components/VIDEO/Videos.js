import React from 'react';
import v1 from '../../assets/v1.mp4';
import v2 from '../../assets/v2.mp4';
import v3 from '../../assets/v3.mp4';
import v4 from '../../assets/v4.mp4';
import v5 from '../../assets/v5.mp4';
import v6 from '../../assets/v6.mp4';
import v7 from '../../assets/v7.mp4';
import v8 from '../../assets/v8.mp4';
import './videos.css'; // Import the CSS file

const Videos = () => {
  return (
    <div>
      <h2>Videos</h2>
      <div className="video-container">
        <h3>BREASTFEEDING GOOD ATTACHMENT (LATCHING)</h3>
        <video controls>
          <source src={v1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-container">
        <h3>FEEDING EXPRESSED BREAST MILK</h3>
        <video controls>
          <source src={v2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-container">
        <h3>BREASTFEEDING BENEFITS</h3>
        <video controls>
          <source src={v3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-container">
        <h3>FOOTBALL POSITION</h3>
        <video controls>
          <source src={v4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-container">
        <h3>STORAGE OF BREAST MILK</h3>
        <video controls>
          <source src={v5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-container">
        <h3>CROSS CRADLE POSITION</h3>
        <video controls>
          <source src={v6} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-container">
        <h3>SIDELYING POSITION</h3>
        <video controls>
          <source src={v7} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-container">
        <h3>HAND EXPRESSING BREAST MILK</h3>
        <video controls>
          <source src={v8} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Videos;