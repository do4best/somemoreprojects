import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {getUserDetails} from "../../backEnd/services/utils/getUserDetails.js";
import {useNavigate} from "react-router";

function NavigationPage({active}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const userDetails = getUserDetails();
        setUser(userDetails);
    },[])
    const navigate = useNavigate();
    const handelLogout = ()=>{

            localStorage.removeItem('todoAppUser');
            navigate("/login")

    }
    return (
        <>
            <div className=" navbar bg-base-100 shadow-sm ">
                <div className=" flex-1">
                    <Link to={"/"} className="btn btn-error text-xl hover:bg-blue-600" >To Do's</Link>

                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to={"/"} className={active === 'home' && 'bg-red-500'} >Home</Link></li>
                        {user && <li> <Link to={"/todo"} className={active === 'myTask' && 'activeNav'} >My Task</Link></li>}
                        {user ? (
                            <>
                                <li>
                                    <details>
                                        <summary>{user?.firstName ? `Hello, ${user?.firstName} ${user?.lastName}` : (user?.username || 'Account')}</summary>
                                        <ul className="bg-base-100 rounded-t-none p-2">
                                            <li><span onClick={handelLogout}>Logout</span></li>
                                        </ul>
                                    </details>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to={"/login"}>Login</Link>
                                </li>
                                <li>
                                    <Link to={"/register"}>Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>

        </>
    );
}

export default NavigationPage;