import Image from "next/image"
import { inter } from "../../../styles/fonts"
import Link from "next/link"

function Taskmodal() {
  return (
    <div className="flex flex-col bg-red-50 w-[670px] h-full absolute right-0 top-0">
        <div className="flex flex-col bg-red-100 gap-8 p-6">
            
            <div className="flex flex-col w-[38.875rem] gap-[1.688rem]">
                
                <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                        <Link href="/dashboard">
                        <Image src="/close.svg" width={24} height={24} alt="close button" />
                        </Link>
                        <Image src="/crossdoublearrow.svg" width={24} height={24} alt="zoom button" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <Image src="/share.svg" width={98} height={40} alt="close button" />
                        <Image src="/favorite.svg" width={116} height={40} alt="zoom button" />
                    </div>
                </div>
                
                <div className="">
                    
                </div>

            </div>

            <div className="w-full h-[0.063rem] bg-[#dedede]"></div>
            
            <div className={`${inter.className} font-medium text-base text-[#c0bddb]`}>Start writing, or drag your own files here.</div>
        </div>
    </div>
  )
}

export default Taskmodal