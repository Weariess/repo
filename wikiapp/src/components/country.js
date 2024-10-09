import Image from "next/legacy/image"
export default function Country({kraj}){
    return(
        <div className="border p-2 flex flex-col items-center">
            <div className="relative w-[200px] h-[100px]">
            <Image 
            src={kraj.flags.png}
            layout="fill"
            sizes="(max-width: 200px), (max-width: 100px)"
            objectFit="contain"
            alt={kraj.name.common}
            /></div>
            <h1 className="text-center font-semibold"> {kraj.name.common}</h1>
            <p className="text-center">Stolica: {kraj.capital}</p>
            <p className="text-center">{kraj.cca2}</p>
        </div>
    )

}