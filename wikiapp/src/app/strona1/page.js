import Link from "next/link";

export default function Page(){
    return(
        <div className="flex flex-col gap-2">
            <Link href="/">main</Link>
            <Link href="/strona1">strona1</Link>
        </div>
        
    )

   
}