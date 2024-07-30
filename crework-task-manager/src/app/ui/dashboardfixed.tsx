import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { inter } from '../../../styles/fonts'
import Optionsdashboardfixed from './optionsdashboardfixed'

function Dashboardfixed() {
  return (
    <div className="fixed flex flex-col h-full w-[17.813rem]
       px-4 pt-6 pb-8 border border-[#dedede] bg-[#ffffff] justify-between">
        
        <div className="flex flex-col gap-4 w-full">

          <div className="flex flex-col gap-2">

            <div className="flex gap-2 items-center">
              <Image src="/profile.svg" alt="profile picture" width={31} height={31}/>
              <div className={`${inter.className} font-medium text-xl text-[#080808]`}>Joe Gardner</div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <Image src="/bell.svg" alt="bell" width={24} height={24}/>
                <Image src="/yellowstatus.svg" alt="status" width={24} height={24}/>
                <Image src="/doublearrow.svg" alt="double arrow" width={24} height={24}/>
              </div>

              <Link href="/signup">
              <div className="flex items-center p-2 bg-[#f4f4f4] rounded-[4px]">
                <div className={`${inter.className} text-[#797979]`}>Logout</div>
              </div>
              </Link>
            </div>

          </div>

          <div className="flex flex-col gap-4">
            
            <div className="flex flex-col gap-2">

              <div className="flex gap-[0.875rem] p-2 border border-[#dddddd] rounded-[0.25rem] bg-[#f4f4f4]">
                <Image src="/home.svg" height={24} width={24} alt="home"/>
                <div className={`${inter.className} text-[#797979] text-xl`}>Home</div>
              </div>
              <Optionsdashboardfixed src={"/board.svg"} alt={"Boards"} name={"Board"}/>
              <Optionsdashboardfixed src={"/settings.svg"} alt={"Settings"} name={"Settings"}/>
              <Optionsdashboardfixed src={"/teams.svg"} alt={"Teams"} name={"Teams"}/>
              <Optionsdashboardfixed src={"/analytics.svg"} alt={"Analytics"} name={"Analytics"}/>

            </div>

            <button className="flex gap-2 p-2 bg-gradient-to-b from-[#4c38c2] to-[#2f2188] border border-[#4836cc] 
            rounded-lg items-center justify-center">
              <div className={`${inter.className} text-[#ffffff] font-medium text-xl`}>Create new task</div>
              <Image src="/invertedwhitepluscircle.svg" alt="plus button" width={24} height={24}/>
            </button>

          </div>

        </div>

        <div className="flex gap-2 p-2 bg-[#f3f3f3] w-full">
          <Image src="/download.svg" alt="download the app" width={40} height={40}/>
          <div className="flex flex-col gap-1">
            <div className={`${inter.className} text-[#666666] font-medium text-xl w-full `}>Download the app</div>
            <div className={`${inter.className} text-[#666666] text-sm w-full`}>Get the full experience</div>
          </div>
        </div>

       </div>
  )
}

export default Dashboardfixed