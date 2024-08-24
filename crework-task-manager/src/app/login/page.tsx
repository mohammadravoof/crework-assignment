'use client'
import { useState } from 'react'
import { login } from '../lib/apiService'
import Link from "next/link"
import { inter,barlow } from "../../../styles/fonts"
import Placeholder from "../ui/placeholder"
import Primarybutton from "../ui/primarybutton"
import { useRouter } from 'next/navigation'


export default function Page() {

  const [formData, setFormData] = useState({
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
       await login(formData);
       router.push('/dashboard')
      
      console.log('Login initiated:');


    } catch (error) {
      console.error('Login failed:', error);
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
       <Placeholder placeholder='email' name="email" type="text" value={formData.email} onChange={handleChange} eye={false}/>
       <Placeholder placeholder='password' name="password" type="password" value={formData.password} onChange={handleChange} eye />
       <Primarybutton name={"Login"}/>
       </form>

     </div>
     
     <div className={inter.className}>
       <div className="text-xl font-normal text-[#606060]">
       Don&apos;t have an account? Create a 
       <Link href="/signup" className="text-[#0054a1]"> new account</Link><span className="text-black">.</span>
       </div>
     </div>
   </div>
</main>
)
}