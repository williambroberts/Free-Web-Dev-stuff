//
"use client"
import {FiSun,FiMoon} from "react-icons/fi"
import useTheme from "./useTheme"
type ThemeType = "light"|"dark"
import styles from "./ThemeButton.module.css"
import { memo } from "react"
function getInitialTheme():ThemeType {
    let initialTheme:any = "light"
    try{
        initialTheme = localStorage.getItem('data-theme')
    }catch(e){

    }
    if (initialTheme){
       
        return initialTheme
    }
    //
    let match = "(prefers-color-scheme: dark)"
     if (window.matchMedia(match).matches){
        return "dark"
     }


    return "light"
}
 const ThemeButton = () => {
    const [theme,handleTheme]=useTheme(getInitialTheme)
  return (
    <button 
    aria-label="theme"
    className={styles.theme}
    onClick={handleTheme}>
        {theme==="light"? <FiSun/>:<FiMoon/>}
    </button>
  )
}   
export default memo(ThemeButton)
