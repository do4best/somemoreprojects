import React, {useEffect, useState} from 'react';
import Title from "../Esignature/title.jsx";
import Button from "./Button.jsx";
import {BsFillFileEarmarkPostFill} from "react-icons/bs";
import {FaUserAlt} from "react-icons/fa";
import {BiCommentDetail} from "react-icons/bi";

function MainTestimonial() {

    const [testimonials, setTestimonials] = useState("");
    const [items, setItems] = useState([])
    useEffect(()=>{
        if (testimonials) {
            fetch(`https://jsonplaceholder.typicode.com/${testimonials.toLowerCase()}s`)
                .then(res=>res.json())
                .then(json=>setItems(json))
        }
    },[testimonials])
          return (
        <>
        <h1>Main Testimonial </h1>
            <Title/> 


                <Button icon={<BsFillFileEarmarkPostFill/>} text={"Posts"} classes="btn btn-success" onClick={()=>setTestimonials("post")}/>	&#160;
            <Button icon={<FaUserAlt/>} text={"Users"}  classes="btn btn-success" onClick={()=>setTestimonials("user")}/>
            &#160;
            <Button icon={<BiCommentDetail/>} text={"Comments"}  classes="btn btn-success" onClick={()=>setTestimonials("comment")}/>
<Title name={!testimonials ? "Select from the above" : testimonials.charAt(0).toUpperCase() + testimonials.slice(1) + "s"}/>
            {!items ? null : (
                <div className="item-container" style={{ marginTop: '20px' }}>
                    {items.slice(0, 10).map((item) => {
                        return (
                            <div key={item.id} className="item-card" style={{ 
                                border: '1px solid #ddd', 
                                borderRadius: '5px', 
                                padding: '10px', 
                                margin: '10px 0',
                                backgroundColor: '#f9f9f9' 
                            }}>
                                <h3 style={{ marginBottom: '5px' }}>#{item.id}</h3>
                                {testimonials === "post" && (
                                    <>
                                        <h4 style={{ fontWeight: 'bold' }}>{item.title}</h4>
                                        <p>{item.body}</p>
                                    </>
                                )}
                                {testimonials === "user" && (
                                    <>
                                        <h4 style={{ fontWeight: 'bold' }}>{item.name}</h4>
                                        <p>Email: {item.email}</p>
                                        <p>Username: {item.username}</p>
                                    </>
                                )}
                                {testimonials === "comment" && (
                                    <>
                                        <h4 style={{ fontWeight: 'bold' }}>Post ID: {item.postId}</h4>
                                        <p>Name: {item.name}</p>
                                        <p>Email: {item.email}</p>
                                        <p>{item.body}</p>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default MainTestimonial;