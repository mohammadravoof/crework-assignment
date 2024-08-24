import { inter } from "../../../styles/fonts"
import Image from "next/image"


function Placeholder({placeholder,name,eye = false,type,value,onChange}: {placeholder:string,name:string,eye:boolean,type:string,value:string,onChange:any}) {
  return (
    <div className="flex justify-between w-[33rem] px-3 py-4 bg-[#ebebeb]
                    rounded-lg border focus-within:border-[#999999]">
        <input className={`${inter.className} text-[#606060] text-xl font-normal
             bg-transparent peer focus:outline-none w-full peer`} 
             placeholder={placeholder} name={name}
             type={type} value={value} onChange={onChange}/>
        {eye && <Image src="/eye.svg" width={24} height={24} alt="eye"/>}
    </div>
  )
}

export default Placeholder