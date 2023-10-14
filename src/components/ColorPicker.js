import React, { useState } from 'react';
import './style.css';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
  };

  const buttonStyling = {
    backgroundColor: selectedColor || 'initial',
    cursor: 'pointer'
  }

  return (
    <div>
      <center>
      <div className='mainarea'>
        <div className='selection'>
      {isColorListVisible && (
        <div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {colors.map((color, index) => (
              <li key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: color,
                    cursor: 'pointer'
                  }}
                  onClick={() => handleColorClick(color)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <button style={buttonStyling} onClick={toggleColorList}>Pick a color</button>
    </div>
    </div>
    </center>
    </div>
  );
};

export default ColorPicker;
