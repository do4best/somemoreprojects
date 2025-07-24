import React, {useEffect, useState} from 'react';
import Title from "../Esignature/title.jsx";
import Blog from "./Blog.jsx";
import {ThemeContext} from "./themeContext.jsx";
import {themes} from "./themeContext.jsx";

function MainDarkMode() {
    const [darkMode, setDarkMode] = useState(themes.light);
    function changeTheme(){
        darkMode === themes.light?setDarkMode(themes.dark):setDarkMode(themes.light);
    }

    useEffect(() => {
        switch (darkMode) {
            case themes.dark:
                document.body.classList.add(" dark:text-white ");
                document.body.classList.remove("light");
                break;
                case themes.light:
                    document.body.classList.add("light");
                    document.body.classList.remove("dark");
        }
    },[darkMode])
    return (
        <>
            <ThemeContext.Provider value={{darkMode,changeTheme}} >
        <Blog/>
            </ThemeContext.Provider>
        </>
    );
}

export default MainDarkMode;