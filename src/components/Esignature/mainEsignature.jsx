import React, {useState} from 'react';
import Title from "./title.jsx";

function MainEsignature(props) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    return (
        <>
            <div className="flex flex-col justify-center items-center">
        <h1>ESignature</h1>
            <Title name={!name?"Enter your Name":name} classes={"text-primary text-4xl"}/>
                <Title className={"text-warning text-xl"} name={!date?"Dob":date}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aut autem beatae dicta dolorum ea eius, facilis fugiat ipsam laboriosam mollitia neque nesciunt omnis reiciendis sunt tempore temporibus! Delectus molestiae quisquam quod reiciendis ut! Dolorum eos modi odit ratione repellat veritatis? Accusantium asperiores deleniti enim itaque natus numquam perspiciatis possimus praesentium quos vitae? Eos id mollitia nesciunt non officiis provident, voluptate! Accusantium alias atque consequuntur cum cumque debitis dolorem harum iste necessitatibus, nemo nihil nulla numquam officia officiis pariatur quam soluta tenetur ut vero voluptatem. A assumenda aut beatae consequuntur culpa et, fuga, incidunt, iure minima quisquam reiciendis vero!</p>
            </div>
            <div className=" flex flex-row justify-around items-center relative top-[40vh]">
                <input type="date" className="input" onChange={(e)=>setDate(e.target.value)}/>
                <input type="text" className="input" onChange={(e)=>setName(e.target.value)}/>
            </div>
        </>
    );
}

export default MainEsignature;