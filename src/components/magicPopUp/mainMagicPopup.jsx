import React, {useEffect} from 'react';
import PopupComponent from "./popup.component.jsx";
import Title from "../Esignature/title.jsx";

function MainMagicPopup() {
    const [trigger,setTrigger]=React.useState(false)
    const [timeTrigger,setTimeTrigger]=React.useState(false)
    const [triggerSuccesss,setTriggerSuccesss]=React.useState(false)
    const trigerChange=()=>{
        console.log("triger")
        setTimeTrigger(true)

    }
    useEffect(()=>{
        setTimeout(()=>{
            setTimeTrigger(true)
        },3000),
            setTimeout(()=>{
                setTriggerSuccesss(true)
            },8000)
    },[])
    return (
        <>
        <div className="flex flex-col justify-center items-center">
            <Title name={"Click for popup or waite for 5 seconds"}/>
            <button className="btn btn-success" onClick={setTrigger}>Click It</button>
             <PopupComponent type="alert-error" title="Trigger Popup" text={"This is Triggered by Popup"} handelClose={setTrigger} trigger={trigger}/>
            <PopupComponent type="alert-warning" title="Time Trigger" text={"This is Triggered by Popup"} handelClose={setTimeTrigger} trigger={timeTrigger}/>
            <PopupComponent type="alert-error" title="Time Trigger" text={"This is Triggered Success by Popup"} handelClose={setTriggerSuccesss} trigger={triggerSuccesss}/>
        </div>
        
        </>
    );
}

export default MainMagicPopup;