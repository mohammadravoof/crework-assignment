import { inter } from "../../../styles/fonts"

function Primarybutton({name}:{name:string}) {
  return (
    <button className={`${inter.className} flex w-full justify-center items-center p-2
     bg-gradient-to-t from-[#4b36cc] to-[#9c93d4] focus:bg-gradient-to-b
      focus:from-[#4c38c2] focus:to-[#2f2188] rounded-lg font-medium text-xl
       text-[#ffffff] h-[3.25rem] border border-[#9c93d4] `}
       
       >{name}</button>
  )
}

export default Primarybutton