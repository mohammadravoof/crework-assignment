import Link from "next/link"
import { inter,barlow } from "../../../styles/fonts"
import Placeholder from "../ui/placeholder"
import Primarybutton from "../ui/primarybutton"

export default function Page() {
    return (
    <main className="flex min-h-screen flex-col p-24 items-center bg-gradient-to-b
     from-[#ffffff] to-[#afa3ff]">
    <div className="flex flex-col items-center h-max w-max p-[3.75rem] gap-8
    bg-gradient-to-b from-[#f7f7f7] to-[#f0f0f0] border border-[#cecece] rounded-2xl ">

     <div className={barlow.className}>
       <div className="text-5xl text-[#2d2d2d]">Welcome to 
         <span className="text-[#4534ac]"> Workflo</span>!</div>
     </div>

     <div className="flex flex-col gap-[1.375rem]">
       <div className="flex flex-col gap-6">
       <Placeholder name={"Full name"} type={"text"} eye={false}/>
       <Placeholder name={"Your email"} type={"text"} eye={false}/>
       <Placeholder name={"Password"} type={"password"} eye />
       <Link href="/dashboard">
       <Primarybutton name={"Sign up"}/>
       </Link>
       </div>

     </div>
     
     <div className={inter.className}>
       <div className="text-xl font-normal text-[#606060]">
        Already have an account?
       <Link href="/login" className="text-[#0054a1]"> Log in</Link><span className="text-black">.</span>
       </div>
     </div>
   </div>
</main>
)
}