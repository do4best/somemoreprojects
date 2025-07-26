import React, {useEffect, useState} from 'react';
import Title from "../Esignature/title.jsx";
import Blog from "./Blog.jsx";
import {ThemeContext} from "./themeContext.jsx";
import {themes} from "./themeContext.jsx";

function MainDarkMode() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem(themes.light)?localStorage.getItem(themes.light):themes.dark);
    useEffect(()=>{
        localStorage.setItem(themes.light,darkMode)
        const locatheme = localStorage.getItem(themes.light)
        document.querySelector('html').setAttribute('data-theme',locatheme)
    },[darkMode])
const changeTheme=()=>{
        setDarkMode(darkMode==themes.dark?themes.light:themes.dark)
}
    return (
        <>
            <ThemeContext.Provider value={{darkMode,changeTheme}} >
        <Blog/>
            </ThemeContext.Provider>
        </>
    );
}

export default MainDarkMode;