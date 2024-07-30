import React from 'react'
import Image from 'next/image'
import { inter } from '../../../styles/fonts'

function Nexttosearchoptions({name,src,alt}:{name:string,src:string,alt:string}) {
  return (
    <div className='flex gap-[14px] p-2 rounded-[4px] h-10 items-center bg-[#f4f4f4]'>
        <div className={`${inter.className} text-[#797979]`}>{name}</div>
        <Image src={src} alt={alt} height={24} width={24}/>
    </div>
  )
}

export default Nexttosearchoptions