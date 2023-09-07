
import {useEffect,useState} from "react"

type ThemeType = "light"| "dark"
type getInitialThemeType = ()=>"light"|"dark"
type useThemeType = [ThemeType,handleThemeType]
type handleThemeType = React.MouseEventHandler<HTMLButtonElement> 

const useTheme = (getInitialTheme:getInitialThemeType):useThemeType=>{

    const [theme,setTheme]=useState<ThemeType>(getInitialTheme)
    const handleTheme:handleThemeType = ()=>{
        setTheme(t=>t==="dark"?"light":"dark")
    }
    useEffect(()=>{
        localStorage.setItem('data-theme',theme)
        document.body.dataset.theme=theme
        //document.body.setAttribute('data-theme',theme)
    },[theme])


    return [theme,handleTheme]
    
}

export default useTheme
