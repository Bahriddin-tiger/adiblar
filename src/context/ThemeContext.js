import {  createContext, useEffect, useState } from "react";
 export const ThemeContext = createContext()
 export const ThemeProvider = ({children})=>{
     const localData=window.localStorage.getItem("theme")
     const [theme, setTheme] = useState(localData || 'dark')
    useEffect(()=>{
        window.localStorage.setItem("theme", theme )
    },[theme])
    return(
        <ThemeContext.Provider value={{theme,setTheme}}> {children} </ThemeContext.Provider>
    )
}