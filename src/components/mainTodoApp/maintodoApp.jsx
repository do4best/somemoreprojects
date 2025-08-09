import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import Landing from "./Landing/landing.jsx";
import Login from "./AuthFolder/login.jsx";
import Register from "./AuthFolder/register.jsx";
import TodoList from "./toDoList/todoList.jsx";
function MaintodoApp() {
    return (
        <>
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/todo" element={<TodoList/>}/>
    </Routes>
</BrowserRouter>

        </>
    );
}

export default MaintodoApp;