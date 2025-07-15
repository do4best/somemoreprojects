import React, {useEffect, useState} from 'react';
import Title from "../Esignature/title.jsx";

function MainRandomizeColor() {
    const [colorChangeCount, setColorChangeCount] = useState(0);

    const handelClick = ()=>{
  let body = document.querySelector('html');
  body.style.backgroundColor = randomColor();
    }
    const randomColor = ()=>{
        const letters ='0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color;
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            let body = document.querySelector('html');
            body.style.backgroundColor = randomColor();
            console.log(randomColor());
            setColorChangeCount(prev => prev + 1); // Update state to trigger nextcolorchange
        },1500)
        return ()=>clearTimeout(timer)
    },[colorChangeCount])
    const randonHex=()=>`#${Math.floor(Math.random()*0xffffff).toString(16)}`
    return (
        <>
        <Title name={"Randomize Color"}/>
            <div className="flex flex-row  justify-center items-center gap-5 mt-5">
            <button className="btn btn-primary" onClick={ handelClick}>Click Me</button>
            <button className="btn btn-warning" onClick={ handelClick}>Click Me</button>
            <button className="btn btn-success" onClick={ handelClick}>Click Me</button>
            <button className="btn btn-black" onClick={ handelClick}>Click Me</button>
            </div>
        </>
    );
}

export default MainRandomizeColor;
