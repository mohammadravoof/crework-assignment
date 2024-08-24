'use client'
import Link from "next/link"
import { inter,barlow } from "../../../styles/fonts"
import Placeholder from "../ui/placeholder"
import Primarybutton from "../ui/primarybutton"
import { useState } from "react"
import { signUp } from "../lib/apiService"
import { useRouter } from 'next/navigation'


export default function Page() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signUp(formData);
      router.push('/login')
      console.log('SignUp initiated:', response);


    } catch (error) {
      console.error('SignUp failed:', error);
      // Handle error
    }
  };

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
       <form onSubmit={handleSubmit} className="flex flex-col gap-6">
       <Placeholder name="name" placeholder="Full name" type="text" value={formData.name} onChange={handleChange} eye={false}/>
       <Placeholder name="email" placeholder="Your email" type="text" value={formData.email} onChange={handleChange} eye={false}/>
       <Placeholder name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange} eye />
       <Primarybutton name={"Sign up"}/>
       </form>

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