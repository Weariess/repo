"use client"
import { useState, useEffect } from 'react'
import Image from "next/legacy/image"

export default function Info({params}){

    const[kraj, setKraj] = useState([])
    const[load, setLoad] = useState(true)

    useEffect(()=>{
        async function getData(){
            try{
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.kod}`)
                const json = await response.json()
                setKraj(json)
                console.log(json)

            }catch{

            }finally{
                setLoad(false)
            }
        }
        getData()
    }, [])
    
    return(
        <div className="flex flex-col items-center justify-center h-screen gap-2">
            {load && <h1>Pobieranie danych</h1>}
            {kraj.length>0
            && <Image 
            src={kraj[0].flags.png}
            width={"800px"}
            height={"400px"}
            alt={kraj[0].name.common}
            />}
            {kraj.length>0 && <h1>{kraj[0].name.common}</h1>}
            {kraj.length>0 && <h2>{kraj[0].cca2}</h2>}
        </div>
    )

}