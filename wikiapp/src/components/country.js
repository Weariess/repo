import Image from "next/image"
export default function Country({kraj}){
    return(
        <div className="border p-2 flex flex-col items-center">
            <div className="relative w-[200px] h-[100px]">
            <Image 
            src={kraj.flags.png}
            layout="fill"
            objectFit="contain"
            alt={kraj.name.common}
            /></div>
            <h1 className="text-center font-semibold"> {kraj.name.common}</h1>
            <p className="text-center">Stolica: {kraj.capital}</p>
            <p className="text-center">Populacja: {kraj.population}</p>
        </div>
    )

}