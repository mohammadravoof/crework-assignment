import React from 'react'
import Image from 'next/image'
import { inter } from '../../../styles/fonts'
import Task from './task'

export type priority = "" | "" | "";

function Statusandtask({title,children}:{title:string,children:any}) {
  return (
    <div className='flex flex-col gap-4 w-full'>

        <div className='flex justify-between'>
            <div className={`${inter.className} text-xl text-[#555555]sd`}>{title}</div>
            <Image src="/burger.svg" alt="burger" height={24} width={24}/>
        </div>

        {children}

        <div className='flex items-center justify-between p-2 rounded-lg bg-gradient-to-b from-[#3a3a3a] to-[#202020]'>
            <div className={`${inter.className} text-[#e3e1e1]`}>Add new</div>
            <Image src="/pluswhite.svg" alt="plus" width={24} height={24}/>
        </div>

    </div>
  )
}

export default Statusandtask