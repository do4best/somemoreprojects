import React from 'react';
import Slider from "./slider.jsx";
import Title from "../Esignature/title.jsx";
import {AiFillUnlock} from "react-icons/ai";
import image1 from "./fly.jpeg"

function MainSliderExample() {
    const [showSlider, setShowSlider] = React.useState(true);
    const[uiProps,setUiProps]=React.useState({uiText:"Unlock Screen",
    uiColor:"primary",
    uiBg:`url(${image1}) no-repeat center center/cover`})
    const [lockSliderValue,setLockSliderValue]=React.useState(0);
    const handelSliderChange=(e)=>{
        setLockSliderValue(e.target.value)
        setShowSlider(false)
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center rounded-3xl  text-center shadow-info shadow-xl"  style={{height:"70vh",marginTop:"15vh",width:340,border:'4px solid black'
        ,background:uiProps.uiBg}} >
            <div className=" flex flex-col justify-center items-center" >
                <Title name={uiProps.uiText}  classes={"text-primary text-4xl"}/>
                {showSlider?<Slider width={"300px"} handelInput={handelSliderChange} sliderValue={lockSliderValue}/>:<AiFillUnlock className={"unlockicon"} onClick={()=>setShowSlider(true)}/>}

            </div>

        </div>
            </div>
        </>
    );
}

export default MainSliderExample;