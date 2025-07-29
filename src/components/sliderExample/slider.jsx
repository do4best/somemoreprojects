import React from 'react';
import './slider.css'
function Slider({handelInput,sliderValue,width}) {
    return (
        <>
            <input 
                type="range" 
                className="slider bg-gray-200 mb-2 rounded appearance-none h-15"
                style={{ width: width || '500px' }} 
                onInput={handelInput} 
                value={sliderValue}
            />
        </>
    );
}

export default Slider;