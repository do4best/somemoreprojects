import React, {useState} from 'react';
import Title from "../Esignature/title.jsx";

function MainTempControl(props) {
    const [temp, setTemp] = useState(0);
    return (
        <>
            <div className={` mt-5  absolute left-180 flex flex-col justify-around items-center h-150 w-150 shadow-2xl ${temp == 0?"shadow-info":"shadow-warning"}`}>
<div className={`h-80 w-80 border-4 rounded-full flex justify-center items-center ${temp>0?"bg-success":"bg-warning"}`}>
        <h1 className={`text-2xl`}>{temp} &deg;C</h1>

</div>
                <h1 className={`${temp == 1?"text-3xl text-primary":"text-3xl text-warning"}`}>{`${temp < 1?"Getting Cold":"Getting Hot"}`}</h1>
                <div className="flex flex-row gap-2">

                <button className="btn btn-lg btn-success" onClick={()=>setTemp(temp+1)}>+</button> <button className="btn btn-lg btn-warning" onClick={()=>setTemp(temp-1)}>-</button>
                    <button className="btn btn-lg btn-warning" onClick={()=>setTemp(0)}>Reset</button>
                </div></div>
        </>
    );
}

export default MainTempControl;