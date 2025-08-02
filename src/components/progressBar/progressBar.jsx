import React from 'react';

function ProgressBar({bgColor,completed}) {
    const completedWidth = `${completed}%`;
    
    return (
        <>
        <div className="w-full bg-gray-200 rounded-2xl h-6 mb-4">
            <div 
                className={`h-full rounded-2xl ${!bgColor?"bg-primary":bgColor} text-right pr-2 text-white flex items-center justify-end transition-all duration-300`}
                style={{width: completedWidth}}
            >
                {completed}%
            </div>
        </div>
        </>
    );
}

export default ProgressBar;