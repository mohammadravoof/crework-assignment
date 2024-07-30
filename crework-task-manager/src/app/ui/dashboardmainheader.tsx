import React from 'react'
import { inter,barlow } from '../../../styles/fonts'
import Image from 'next/image'
import Bannerdashboard from './bannerdashboard'
import Nexttosearchoptions from './nexttosearchoptions'
function Dashboardmainheader() {
  return (
    <div className='flex flex-col gap-4'>

            <div className='flex justify-between items-center'>

                <div className={`${barlow.className} font-semibold text-5xl text-[#080808]`}
                >Good morning, Joe!</div>

                <div className='flex items-center gap-2'>
                    <div className={`${inter.className} text-[#080808]`}>Help & feedback</div>
                    <Image src="/questionmark.svg" alt="questionmark" width={24} height={24}/>
                </div>

            </div>

            <div className='flex gap-2 items-center'>
                <Bannerdashboard src={"/introducingtags.svg"} alt={"introducing tags"} width={77} height={61}
                 title={"Introducing tags"} 
                 description={"Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient."}/>
                <Bannerdashboard src={"/sharenotes.svg"} alt={"share notes"} width={76} height={50}
                 title={"Share Notes Instantly"} 
                 description={"Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options."}/>
                <Bannerdashboard src={"/accessanywhere.svg"} alt={"access anywhere"} width={76} height={70}
                 title={"Access Anywhere"} 
                 description={"Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer."}/>

            </div>

            <div className='flex items-center justify-between'>

                <div className='flex p-2 w-[12.25rem] h-10 bg-[#ffffff] border border-[#e9e9e9] rounded-lg justify-between items-center'>
                    <div className={`${inter.className} text-[#797979]`}>Search</div>
                    <Image src="/search.svg" height={24} width={24} alt="search"/>
                </div>

                <div className='flex gap-4 items-center'>

                    <div className='flex gap-4 items-center'>
                        <Nexttosearchoptions src={"/calendar.svg"} alt={"calender"} name={"Calender view"}/>
                        <Nexttosearchoptions src={"/automation.svg"} alt={"automation"} name={"Automation"}/>
                        <Nexttosearchoptions src={"/filter.svg"} alt={"filter"} name={"Filter"}/>
                        <Nexttosearchoptions src={"/share.svg"} alt={"share"} name={"Share"}/>
                    </div>
                    

                    <button className="flex gap-2 p-2 bg-gradient-to-b from-[#4c38c2] to-[#2f2188] border border-[#4836cc] 
                        rounded-lg items-center justify-center">
                        <div className={`${inter.className} text-[#ffffff] font-medium text-base`}>Create new </div>
                        <Image src="/invertedwhitepluscircle.svg" alt="plus button" width={24} height={24}/>
                    </button>

                </div>

            </div>

        </div>
  )
}

export default Dashboardmainheader