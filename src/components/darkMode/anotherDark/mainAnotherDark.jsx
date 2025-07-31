import React, {useEffect, useState} from 'react';
import AnotherBlog from "./anotherBlog.jsx";
import {ThemeContext, themes} from "./theme-context.js";



function MainAnotherDark() {
    const [darkMode, setDarkMode] = useState(themes.light);

    useEffect(()=>{
      document.querySelector('html').setAttribute('data-theme', darkMode);
    },[darkMode])
    
    const changeTheme=()=>{
        setDarkMode(darkMode === themes.dark ? themes.light : themes.dark);
        console.log(darkMode)
        console.log(
            document.querySelector('html').getAttribute('data-theme')
        )
    }
    return (
        <>
 <ThemeContext.Provider value={{darkMode,changeTheme}}>
     <AnotherBlog/>
 </ThemeContext.Provider>
        </>
    );
}

export default MainAnotherDark;