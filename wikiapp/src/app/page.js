import Image from "next/image";
import ImieList from "@/components/imieList"
import NumList from "@/components/listan"

export default function Home() {
  const lista = [{imie:"Wiktoria", ok: true},{imie:"Zuza", ok:false},{imie:"Amelia", ok:true}, {imie:"Klaudia", ok:false}]
  const listaa = ["One", "Two", "Three", "Four", "Five"]
  return(
    <div className="flex flex-col items-center justify-center h-screen gap-2">
    {
      lista.map((osoba, index) =>(
        <ImieList key={index} imie={osoba.imie} ok={osoba.ok}/>
      ))
    }
    <ul>
    {
      listaa.map((numb, index) =>(
        <NumList key={index} num={numb}/>
      ))
      
    }
    </ul>
    </div>
  )
}
