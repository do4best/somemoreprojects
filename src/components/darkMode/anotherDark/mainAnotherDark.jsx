import React, {useEffect, useState} from 'react';
import AnotherBlog from "./anotherBlog.jsx";
import {ThemeContext,themes} from "./theme-context.js";



function MainAnotherDark(props) {
    const [darkMode, setDarkMode] = useState(themes.dark);

    useEffect(()=>{
      switch (darkMode){
          case themes.dark:
              document.querySelector('html').setAttribute('data-theme',darkMode)
              break;
              case themes.light:
                  document.querySelector('html').setAttribute('data-theme',darkMode)
              break;
      }
    },[darkMode])
    const changeTheme=()=>{
        darkMode===themes.dark?setDarkMode(themes.light):setDarkMode(themes.dark)
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