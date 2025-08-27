import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import Landing from "../AnotherToDoapp/frontEnd/pages/Landing/landing.jsx";
import LoginPage from "../AnotherToDoapp/frontEnd/loginPage.jsx";
import RegisterPage from "../AnotherToDoapp/frontEnd/pages/Auth/registerPage.jsx";
import TodoApp from "../AnotherToDoapp/frontEnd/pages/todo/todoApp.jsx";

function MainLastToDoApp(props) {
    return (
        <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="/todo" element={<TodoApp/>}/>



          </Routes>
      </BrowserRouter>

        </>
    );
}

export default MainLastToDoApp;