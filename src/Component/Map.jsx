import React from 'react';

const Map = () => {
  return (
    <div style={containerStyle}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68282783724!2d54.89781681599858!3d25.076280446331303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1723007572475!5m2!1sen!2sin"
        width="1000"
        height="450"
        style={iframeStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

const containerStyle = {
   
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: '20px',
  boxSizing: 'border-box',
};

const iframeStyle = {
  border: '2px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default Map;
