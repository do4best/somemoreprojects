import React, {useState} from 'react';
import {useNavigate} from "react-router";
import AuthServices from "../../backEnd/Services/authServices.js";
import {Link} from "react-router-dom";

function RegisterPage() {
    const [username,setUserNames] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const navigate = useNavigate()
    const handelSubmit = async ()=>{
        console.log("submit")
        try{
            setLoading(true)
            let data = {
                firstName:""+firstName+"",
                lastName:""+lastName+"",
                email:""+email+"",
                phone:""+phone+"",
                username:""+username+"",
                password:""+password+""
            }
            const response = await AuthServices.registerService(data)
            console.log(response.data)
            // Persist token
            localStorage.setItem("token", JSON.stringify(response.data))
            // Persist user details so nav can greet immediately
            try {
                const payload = response?.data
                const user = (payload && typeof payload === 'object' && payload.user) ? payload.user : {
                    firstName, lastName, email, phone, username
                }
                localStorage.setItem("todoAppUser", JSON.stringify(user))
            } catch {
                localStorage.setItem("todoAppUser", JSON.stringify({ firstName, lastName, email, phone, username }))
            }
            console.log("token and user are set")
            navigate("/login")
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
                        <div className="flex flex-row justify-center items-center gap-2 ">
                            <input type="text" placeholder="Email" value={email} className="input" onChange={(e)=>setEmail(e.target.value)}/>

                            <input type={"text"}  placeholder="Phone" value={phone} className="input" onChange={(e)=>setPhone(e.target.value)} />


                        </div>

                        <input type="text" placeholder="user name" value={username} className="input" onChange={(e)=>setUserNames(e.target.value)}/>

                        <input type={"password"}  placeholder="password" value={password} className="input mt-5 password" onChange={(e)=>setPassword(e.target.value)} />

                        <div className="  flex flex-row justify-around items-center   ">
                            <div className="">Existing User?</div>
                            <div className="p-3 pr-8"><Link to={"/login"}>Login</Link></div>
                        </div>
                        <div className="justify-end card-actions">

                            <button className="btn btn-success " onClick={handelSubmit}>Register</button>
                        </div>
                    </div>
                </div>
            </div>

        </>)
}

export default RegisterPage;