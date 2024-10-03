"use client"
import { useState } from "react"
export default function strona3(){

    const [theme, setTheme] = useState("bg-pink-200") 

    const color = () =>{
        setTheme(theme == "bg-pink-200" ? "bg-blue-200" : "bg-pink-200")
    }


    return(
        <div className={`h-screen w-full ${theme}`}>

        <button onClick={color}>change color</button>
        </div>
    )
}

//zmiana koloru tła za pomocą przycisku