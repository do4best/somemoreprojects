import React from 'react';
import {Link} from "react-router-dom";
function NavigationComponent() {
    return (
        <>

            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <Link to={"/"} className="btn btn-error text-xl hover:bg-green-600" >To Do's</Link>

                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to={"/"} className={"active:bg-accent"} >Home</Link></li>
                        <li>
                            <Link to={"/login"} >Login</Link>
                        </li>
                        <li>
                            <Link to={"/register"} >Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavigationComponent;