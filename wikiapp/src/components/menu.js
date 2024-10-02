import Link from "next/link";

export default function Menu(){
    return(
        <div className="flex flex-col gap-2">
            <Link href="/">main</Link>
            <Link href="/strona1">strona1</Link>
            <Link href="/strona2">strona2</Link>
        </div>
        
    )

   
}