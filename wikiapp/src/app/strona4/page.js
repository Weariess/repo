"use client"
import { useState } from "react"
export default function strona4(){

    const [h1, seth1] = useState("") 
    const [input, setInput] = useState("")


    const send = () =>{
        seth1(input)
    }


    return(
        <div>
            <h1 className="h-[100px] w-[100px]">{h1}</h1>
        <input className="bg-black" type="text" placeholder="Write something" onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={send}>Send</button>
        </div>
    )
}