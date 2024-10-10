'use client'
import { useState,useEffect } from "react";
import Link from "next/link";
import Country from "@/components/country";

export default function Page(){
    const [data,setData]= useState(null)

    useEffect(()=>{
        const getData = async ()=>{
            try{
                const response = await fetch(`https://restcountries.com/v3.1/all`)
                const jsonData = await response.json()
                setData(jsonData)
                console.log(jsonData)
            }catch(error){
                console.log(error)
            }finally{

            }
        }
        getData()
    },[])

    return(
        <div className="flex flex-wrap w-full gap-2 h-screen justify-center items-center">
        
        {
            data &&
            data.map((kraj,idx)=>
                <Link key={idx} href={`/podstrona/${kraj.cca2}`}>
                <Country kraj={kraj}/>
                </Link>
            )
        }
        </div>
    );
}