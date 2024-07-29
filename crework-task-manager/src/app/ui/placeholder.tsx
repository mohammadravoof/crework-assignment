import { inter } from "../../../styles/fonts"
import Image from "next/image"


function Placeholder({name,eye = false,type = "text"}: {name:string,eye:boolean,type:string}) {
  return (
    <div className="flex justify-between w-[33rem] px-3 py-4 bg-[#ebebeb]
                    rounded-lg border focus-within:border-[#999999]">
        <input className={`${inter.className} text-[#606060] text-xl font-normal
             bg-transparent peer focus:outline-none w-full peer`} 
             placeholder={name}
             type={type}/>
        {eye && <Image src="/eye.svg" width={24} height={24} alt="eye"/>}
    </div>
  )
}

export default Placeholder