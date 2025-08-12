import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import Register from "../mainTodoApp/AuthFolder/register.jsx";
import RegisterPage from "./frontEnd/registerPage.jsx";
import LoginPage from "./frontEnd/loginPage.jsx";
import TodoApp from "./frontEnd/todoApp.jsx";

function MainAnothertodo() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/todoapp" element={<TodoApp/>}/>



                </Routes>

            </BrowserRouter>

        </>
    );
}

export default MainAnothertodo;