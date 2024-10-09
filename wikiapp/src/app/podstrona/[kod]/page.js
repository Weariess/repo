"use client"
import { UNDERSCORE_NOT_FOUND_ROUTE } from 'next/dist/shared/lib/constants'
import { useEffect, useState } from 'react'

export default function Info({params}){

    const[kraj, setKraj] = useState([])
    const[error, setError] = useState(false)
    const[load, setLoad] = useState(true)
    useEffect(()=>{
        async function getData() {
            try{
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.kod}`)
                const json = await response.json()
                console.log(json)
                setKraj(json)
            }catch(error){
               setError(true)

            }finally{
                setLoad(false)
            }
        }

        getData()
    }, [])

    useEffect(()=>{
        if(kraj[0] == undefined){
            setError(true)
        }
        else if(kraj[0]!=undefined){
            setError(false)
        }
    },[kraj])
            
    

    return(
        <div>
            {error && <h1>Nie udalo sie pobrac danych</h1>}
            {load && <h1>Pobieranie danych</h1>}
            {kraj.length>0 && <h1>Info o kraju: {kraj[0].name.common}</h1>}
        </div>
    )
}