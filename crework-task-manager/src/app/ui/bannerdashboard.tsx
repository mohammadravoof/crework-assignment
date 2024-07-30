import React from 'react'
import Image from 'next/image'
import { inter } from '../../../styles/fonts'

function Bannerdashboard({src,alt,height,width,title,description}:
    {src:string,alt:string,height:number,width:number,title:string,description:string}) {
  return (
    <div className='flex gap-[10px] p-4 items-center bg-[#ffffff] rounded-lg border border-[#f4f4f4]'>
        <Image src={src} alt={alt} height={height} width={width}/>
        <div className='flex flex-col gap-1'>
            <div className={`${inter.className} font-semibold text-[#757575]`}>{title}</div>
            <div className={`${inter.className} text-sm text-[#868686]`}>{description}</div>

        </div>
    </div>
  )
}

export default Bannerdashboard