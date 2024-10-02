

export default function ImieList({imie, ok}){
    var classn = ""
    if(ok){
        classn="border w-[200px] text-center bg-green-400"
    }else{
        classn="border w-[200px] text-center"
    }

    return(
        
        <div className={classn}> 
        <p>{imie}</p>
        </div>
    )

}