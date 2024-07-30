import React from 'react'
import Image from 'next/image'

function Taskmodalproperty({imagesrc,imagealt,name}:{imagesrc:string,imagealt:string,name:string}) {
  return (
    <div className="flex gap-6 items-center">
        <Image src={imagesrc} height={24} width={24} alt={imagealt} />
        <div className='text-[#666666]'>{name}</div>
    </div>
  )
}

export default Taskmodalproperty