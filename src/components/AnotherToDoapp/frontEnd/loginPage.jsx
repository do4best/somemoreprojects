import React, {useState} from 'react';
import {Link} from "react-router-dom";
import AuthServices from "../../mainTodoApp/Services/authServices.js";
import {useNavigate} from "react-router";

function LoginPage() {
    const [username,setUserNames] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)
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
            // Persist token
            localStorage.setItem("token", JSON.stringify(response.data))
            // Persist user details for navbar and pages
            try {
                const payload = response?.data
                if (payload && typeof payload === 'object') {
                    const user = payload.user || (payload.username ? { username: payload.username } : null)
                    if (user) {
                        localStorage.setItem("todoAppUser", JSON.stringify(user))
                    } else {
                        // Fallback: at least store the typed username
                        localStorage.setItem("todoAppUser", JSON.stringify({ username }))
                    }
                } else {
                    // Fallback: at least store the typed username
                    localStorage.setItem("todoAppUser", JSON.stringify({ username }))
                }
            } catch {
                localStorage.setItem("todoAppUser", JSON.stringify({ username }))
            }
            console.log("token and user are set")
            navigate("/todo")
            setLoading(false)

        }catch (e){
            // Show alert box if backend indicates an alert
            const resp = e?.response?.data;
            if (resp && (resp.alert || resp.alert === true)) {
                window.alert(resp.message || 'An error occurred');
            } else {
                console.log(e.message);
            }
            setLoading(false)
        }
    }
    return (
        <>

            <div className="flex flex-col justify-center items-center">
                <div className="card w-96 bg-base-100 card-lg shadow-2xl shadow-accent mt-50">
                    <div className="card-body flex flex-col justify-center items-center">
                        <h2 className="card-title text-center border-2 rounded-full p-5">Image</h2>
                        <h1>Login</h1>

                        <input type="text" placeholder="user name" value={username} className="input" onChange={(e)=>setUserNames(e.target.value)}/>

                        <input type={"password"}  placeholder="password" value={password} className="input mt-5 password" onChange={(e)=>setPassword(e.target.value)} />

                        <div className="  flex flex-row justify-around items-center   ">
                            <div className="">New User?</div>
                            <div className="p-3 pr-8"><Link to={"/register"}>Register</Link></div>
                        </div>
                        <div className="justify-end card-actions">
                            <button  className={`btn btn-lg btn-primary ${loading?'loading loading-spinner text-primary':''}`} disabled={!username||!password} onClick={handelSubmit}>Login</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;