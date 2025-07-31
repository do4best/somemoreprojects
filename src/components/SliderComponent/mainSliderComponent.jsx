import React from 'react';
import SliderComponent from "./sliderComponent.jsx";
import Title from "../Esignature/title.jsx";

function MainSliderComponent(props) {
    const [aValue,setAValue]=React.useState(0)
    const handelChange=(e)=>{
        setAValue(e.target.value)
    }
    let bgColor=aValue>50?"bg-success":"bg-warning"
    let textColor=aValue>50?"text-primary":"text-secondary"
    return (
        <>
<Title name={"Slider Component"}/>
<SliderComponent aValue={aValue} handelInput={handelChange} bgColor={bgColor} textColor={textColor}/>

        </>
    );
}

export default MainSliderComponent;