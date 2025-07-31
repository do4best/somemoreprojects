import React, {useEffect, useState} from 'react';
import {BsSearch} from "react-icons/bs";


let bsSearch={
    color:"white",
    fontSize:"2rem",
    cursor:"pointer",
    position:"absolute",
    right:"20px",
    top:"20px"
};
function MainHiddenSearch() {
    const [uiPros,setUiPros] = useState({
        bg:"purple",
        shadow:"",
        transition:"all .3s ease",
        opacity:0.9,
        showSearch:true,
        borderBottom:"2px solid white",
    });
    let body=document.body.style;
    useEffect(()=>{
        body.background=uiPros.bg;
        body.boxShadow=uiPros.shadow;
        body.transition = uiPros.transition;

    },[uiPros.shadow])
    const inputStyle={
        margin:"10vh 25vw",
        height:"30px",
        width:"20vh",
        padding:"1rem .3rem",
        border:"none",
        outline:"none",
        borderRadius:"10px",
        backgroundColor:"transparent",
        borderBottom:"2px solid white",
        fontSize:"1.5rem",
        color:"white",
        boxShadow:"0 0 10px white",
        opacity:uiPros.opacity,
        transition:" all.3s ease"
    }
    const showSearch=()=>{
        setUiPros({
            opacity:1,
            showSearch:false,
        })
    }
    const handelSearch=()=>{
        setUiPros({
            shadow:"inset 0 -60vh 30vw 200px rgba(0,0,0,.8)",
            borderColor:"green"
        })
    }
    const handelSearchBlur=()=>{
        setUiPros({
            shadow:"",
            opacity:0,
            borderBottomColor:"white",showSearch:true,
        })
    }
    return (
        <>
<div className="h-screen">
            <input type="text" placeholder={"Please enter your search"} style={inputStyle} onFocus={handelSearch} onBlur={handelSearchBlur}/>
    {uiPros.showSearch && <BsSearch style={bsSearch} onClick={showSearch}/>}
</div>
        </>
    );
}

export default MainHiddenSearch;