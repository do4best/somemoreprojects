import React, {useState} from 'react';
import {useNavigate} from "react-router";
import AuthServices from "../../../../mainTodoApp/Services/authServices.js";
import {Link} from "react-router-dom";

function RegisterPage(props) {
    const [username,setUserNames] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const navigate = useNavigate()
    const handelSubmit = async ()=>{
        console.log("submit")
        try{
            setLoading(true)
            let data = {
                username:""+username+"",
                password:""+password+""
            }
            const response = await AuthServices.loginService(data)
            console.log(response.data)
            localStorage.setItem("token",JSON.stringify(response.data))
            console.log("token is set")
            navigate("/todo")
            setLoading(false)

        }catch (e){
            console.log(e.message)
            setLoading(false)
        }
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="card w-96 bg-base-100 card-lg shadow-2xl shadow-accent mt-50">
                    <div className="card-body flex flex-col justify-center items-center">
                        <h2 className="card-title text-center border-2 rounded-full p-5">Image</h2>
                        <h1>Registered</h1>
                        <div className="flex flex-row justify-center items-center gap-2 ">
                            <input type="text" placeholder="First Name" value={firstName} className="input" onChange={(e)=>setFirstName(e.target.value)}/>

                            <input type={"text"}  placeholder="Last Name" value={lastName} className="input" onChange={(e)=>setLastName(e.target.value)} />

                        </div>

                        <input type="text" placeholder="user name" value={username} className="input" onChange={(e)=>setUserNames(e.target.value)}/>

                        <input type={"password"}  placeholder="password" value={password} className="input mt-5 password" onChange={(e)=>setPassword(e.target.value)} />

                        <div className="  flex flex-row justify-around items-center   ">
                            <div className="">Existing User?</div>
                            <div className="p-3 pr-8"><Link to={"/login"}>Login</Link></div>
                        </div>
                        <div className="justify-end card-actions">

                            <button className="btn btn-success ">Register</button>
                        </div>
                    </div>
                </div>
            </div>

        </>)
}

export default RegisterPage;