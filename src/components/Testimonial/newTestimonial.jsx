import React, {useEffect, useState} from 'react';
import Title from "../Esignature/title.jsx";
import ButtonClass from "./ButtonClass.jsx";
import {BsFillFileEarmarkPostFill} from "react-icons/bs";
import {FaUserAlt} from "react-icons/fa";
import {BiCommentDetail, BiEdit} from "react-icons/bi";

function NewTestimonial() {
    const [testimonials, setTestimonials] = useState("");
    const [items, setItems] = useState()
    useEffect(()=>{
        if (testimonials){
        fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
            .then(res=>res.json())
            .then(json=>setItems(json))
        console.log(items)
        }
    },[testimonials])
    return (
        <>
        <Title name={"New Testimonial"}/>
            <ButtonClass text={"Posts"} classes={"btn btn-success"} icon={<BsFillFileEarmarkPostFill/>} onClick={()=>setTestimonials("posts")}/>
            &#160;<ButtonClass text={"User"} classes={"btn btn-success"} icon={<FaUserAlt/>} onClick={()=>setTestimonials("users")}/>
            &#160; <ButtonClass text={"Comment"} classes={"btn btn-success"} icon={<BiCommentDetail/>} onClick={()=>setTestimonials("Comments")}/>
            &#160; <ButtonClass text={"Extra"} classes={"btn btn-success"} icon={<BiEdit/>} onClick={()=>setTestimonials("Albums")}/>
<Title name={!testimonials?"choose from the above":testimonials} classes={"text-primary text-5xl text-center mt-3"}/>
            {!items ? null:items.slice(0,10).map((item)=>{
                return(
                    <div className="card bg-base-100 w-96 shadow-sm" key={item.id}>

                        <div className="card-body">
                            {item.name && <h2 className="card-title">{item.name}</h2>}
                            {item.title && <h3 className="card-title">{item.title}</h3>}
                            {item.body && <p>{item.body}</p>}
                            {item.comments && <p>{item.comments}</p>}
                            {item.albums && <p>{item.albums}</p>}

                        </div>
                    </div>
                )}
            )}
        </>
    );
}

export default NewTestimonial;