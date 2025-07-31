import React from 'react';

function SliderComponent({aValue,handelInput,bgColor,textColor}) {
    return (
        <>
        <div className=" flex flex-col justify-center items-center gap-10 mt-50">

                <input type="range" max={100} min={0} value={aValue} onInput={handelInput}/>
            <div className={`${!bgColor ? 'bg-gray-200' : bgColor} h-[${aValue * 30}px] w-[${aValue * 30}px] rounded-full-[${aValue}] flex items-center justify-center ${!textColor ? 'text-black' : textColor}`}>
                <span className="text-lg font-semibold">{aValue}</span>
            </div>
        </div>

        </>
    );
}

export default SliderComponent;