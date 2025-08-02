import React, {useEffect, useRef} from 'react';
import Title from "../Esignature/title.jsx";
import ProgressBar from "./progressBar.jsx";

function MainProgressBar() {
    const [status,setStatus]=React.useState({
        ui:20,
        data:30,
        ux:40,
    })

    const progressObject=[
        { bgColor:"bg-primary",
            completed:status.ui},
        { bgColor:"bg-success",
            completed:status.data},
        { bgColor:"bg-error",
            completed:status.ux},
    ];


    const uiInput = useRef(null);
    useEffect(() => {
uiInput.current.focus()
    })
    return (
        <>

<div className="container mx-auto px-4">
    <div className="text-center text-primary">
        <Title name={"Progress Bar"}/>
    </div>
    <h2 className={"text-warning text-center mt-10"}>Project Status</h2>
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <ul className="list bg-base-100 rounded-box shadow-md">

            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                UI Status :{""}
                <input type="number" className={"input w-full"} ref={uiInput} value={status.ui} onChange={(e)=>setStatus({...status,ui:parseInt(e.target.value) || 0})}/>
            </li>

            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                UX Status :{""}
                <input type="number" className={"input w-full"} value={status.ux} onChange={(e)=>setStatus({...status,ux:parseInt(e.target.value) || 0})}/>
            </li>
            
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                Data Status :{""}
                <input type="number" className={"input w-full"} value={status.data} onChange={(e)=>setStatus({...status,data:parseInt(e.target.value) || 0})}/>
            </li>

        </ul>
        {progressObject.map((item, index)=>(
            <div key={index} className="m-5">
                <ProgressBar bgColor={item.bgColor} completed={item.completed} />
            </div>
        ))}

    </div>
</div>
        </>
    );
}

export default MainProgressBar;