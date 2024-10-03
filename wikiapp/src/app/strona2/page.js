"use client"
import { useState } from "react"
export default function strona2(){

    const [start, setstart] = useState("start") 

    const Click = () =>{
        setstart(start == "start"? "stop" : "start")
    }


    return(
        <div className="flex flex-col items-center justify-center h-screen gap-2">
        <h1>{start}</h1>

        <button onClick={Click}>change</button>
        </div>
    )
}

//stop/start