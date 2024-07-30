import React from 'react'
import Image from 'next/image'
import { inter } from '../../../styles/fonts'

function Optionsdashboardfixed({src,alt,name}:{src:string,alt:string,name:string}) {
  return (
    <div className="flex gap-[0.875rem] p-2">
                <Image src={src} height={24} width={24} alt={alt}/>
                <div className={`${inter.className} text-[#797979] text-xl`}>{name}</div>
    </div>
  )
}

export default Optionsdashboardfixed