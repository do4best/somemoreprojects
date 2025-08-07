import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Input from "daisyui/components/input/index.js";

function Login(props) {
    const [userNames,setUserNames] = useState("")
    const [password,setPassword] = useState("")
    const handelSubmit = ()=>{
        console.log("submit")
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center">
            <div className="card w-96 bg-base-100 card-lg shadow-2xl shadow-accent mt-50">
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title text-center border-2 rounded-full p-5">Image</h2>
                    <h1>Login</h1>

                    <input type="text" placeholder="user name" value={userNames} className="input" onChange={(e)=>setUserNames(e.target.value)}/>

                    <input type={"password"}  placeholder="password" value={password} className="input mt-5 password" onChange={(e)=>setPassword(e.target.value)} />

                        <div className="  flex flex-row justify-around items-center   ">
                        <div className="">New User?</div>
                        <div className="p-3 pr-8"><Link to={"/register"}>Register</Link></div>
                    </div>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary" disabled={!userNames||!password} onClick={handelSubmit}>Login</button>
                        <button className="btn btn-success ">Register</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Login;