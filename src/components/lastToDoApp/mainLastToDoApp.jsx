import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import Landing from "../lastToDoApp/frontEnd/pages/landing.jsx";
import LoginPage from "../lastToDoApp/frontEnd/pages/loginPage.jsx";
import RegisterPage from "../lastToDoApp/frontEnd/pages/registerPage.jsx";
import TodoApp from "../lastToDoApp/frontEnd/pages/todoApp.jsx";

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