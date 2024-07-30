import React from 'react'
import { inter } from '../../../styles/fonts'
import Image from 'next/image'



function Task({status,title,priority,deadline,description}:
    {status:string,title:string,priority:string,description:string,deadline:string}) {


const getBgPriority = (prior: string) => {
    switch (prior) {
      case 'Urgent':
        return 'bg-[#FF6B6B]';
      case 'Medium':
        return 'bg-[#FFA235]';
      case 'Low':
        return 'bg-[#0ECC5A]';
      default:
        return '';
    }
  };

return (
    <div className='flex flex-col gap-4 px-[13px] py-[14px] border 
    border-[#dedede] rounded-lg bg-[#f9f9f9]'>

        <div className='flex flex-col gap-[13px]'>

            <div className='flex flex-col gap-1'>
                <div className={`${inter.className} font-medium text-[#606060]`}>{title}</div>
                <div className={`${inter.className} text-sm text-[#606060]`}>{description}</div>
            </div>
            
            <div className={`${getBgPriority(priority)} flex items-center justify-center px-2 py-[6px]
             rounded-lg h-min w-min ${inter.className} text-xs text-[#ffffff]`}>{priority}</div>
            
            <div className='flex items-center gap-2'>
                <Image src="/time.svg" alt="time" height={24} width={24}/>
                <div className={`${inter.className} font-semibold text-sm text-[#606060]`}>{deadline}</div>
            </div>

        </div>

        <div className={`${inter.className} 
        flex items-center text-sm font-medium text-[#797979]`}>1 hr ago</div>

    </div>
  )
}

export default Task