import Image from "next/image"
import { barlow, inter } from "../../../styles/fonts"
import Link from "next/link"
import Taskmodalproperty from "./taskmodalproperty"

function Taskmodal() {
  return (
    <div className="flex bg-black w-screen">
    <div className="flex flex-col w-[670px] h-full absolute right-0 top-0 bg-white">
        <div className="flex flex-col gap-8 p-6">
            
            <div className="flex flex-col w-[38.875rem] gap-[1.688rem]">
                
                <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                        <Link href="/dashboard">
                        <Image src="/close.svg" width={24} height={24} alt="close button" />
                        </Link>
                        <Image src="/crossdoublearrow.svg" width={24} height={24} alt="zoom button" />
                    </div>
                    <div className="flex gap-4 items-center">
                        {/* <Image src="/share.svg" width={98} height={40} alt="close button" />
                        <Image src="/favorite.svg" width={116} height={40} alt="zoom button" /> */}
                        <div className="flex p-2 gap-[14px] bg-[#f4f4f4] rounded-[4px] items-center h-10">
                            <div className={`${inter.className} text-[#797979]`}>Share</div>
                            <Image src="/share.svg" alt="share" height={24} width={24}/>
                        </div>
                        <div className="flex p-2 gap-[14px] bg-[#f4f4f4] rounded-[4px] items-center h-10">
                            <div className={`${inter.className} text-[#797979]`}>Favorite</div>
                            <Image src="/star.svg" alt="favorite" height={24} width={24}/>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col w-full gap-[2.375rem]">
                    
                    <div className="flex flex-col gap-[2rem] ">
                        
                        <div className={`${barlow.className} text-5xl text-[#cccccc] w-full`}>Title</div>
                        
                        <div className="flex gap-[3.75rem] w-full">
                            
                            <div className="flex flex-col gap-[2rem]">
                                <Taskmodalproperty imagesrc={"/status.svg"} 
                                                    imagealt={"status image"} 
                                                    name={"Status"}/>
                                <Taskmodalproperty imagesrc={"/priority.svg"} 
                                                    imagealt={"priority image"} 
                                                    name={"Priority"}/>
                                <Taskmodalproperty imagesrc={"/deadline.svg"} 
                                                    imagealt={"deadline image"} 
                                                    name={"Deadline"}/>
                                <Taskmodalproperty imagesrc={"/description.svg"} 
                                                    imagealt={"description image"} 
                                                    name={"Description"}/>
                            </div>

                            <div className="flex flex-col gap-[2rem]">
                                <div className={`${inter.className} leading-6 text-[#c1bdbd]`}>
                                    Not selected</div>
                                <div className={`${inter.className} leading-6 text-[#c1bdbd]`}>
                                    Not selected</div>
                                <div className={`${inter.className} leading-6 text-[#c1bdbd]`}>
                                    Not selected</div>
                                <div className={`${inter.className} leading-6 text-[#c1bdbd]`}>
                                    Not selected</div>
                            </div>

                        </div>

                    </div>

                    <div className="flex gap-[1.438rem] items-center">
                        <Image src="/plus.svg" height={24} width={24} alt="plus button"></Image>
                        <div className={`${inter.className}`}>Add custom property</div>
                    </div>

                </div>

            </div>

            <div className="w-full h-[0.063rem] bg-[#dedede]"></div>
            
            <div className={`${inter.className} text-[#C0BDBD]`}>
                Start writing, or drag your own files here.</div>
        </div>
    </div>
    </div>
  )
}

export default Taskmodal