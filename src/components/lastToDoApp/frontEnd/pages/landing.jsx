import React from 'react';
import NavigationPage from "../../../navigationPage.jsx";
import {Link} from "react-router-dom";
import img1 from "../../../../../assets/mytodo.jpeg"
function Landing(props) {
    return (
        <>
        <div>
        <NavigationPage/>
        <div className=" flex flex-row justify-between items-center flex-nowrap gap-2 mt-50">
            <div>
                <h1 className={"text-8xl font-extrabold"}>Schedule your Task with <span className={"text-success"}>Todos</span></h1>
                <div className={"flex flex-row gap-5 mt-10 justify-center items-center"}>
                    <Link to={"/register"} className={"btn btn-lg btn-success"}>Register</Link>
                    <Link to={"/login"} className={"btn btn-lg btn-primary"}>Login</Link>
                </div>
            </div>
            <div className="">
                <img src={img1} alt="" className={"w-200 h-100 mr-20 rounded-3xl"}/>
            </div>
        </div>
        </div>

        </>
    );
}

export default Landing;