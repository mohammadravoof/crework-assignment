'use client'
import { useState } from "react"
import Taskmodal from "../ui/taskmodal"
import Image from "next/image"
import Link from "next/link"
import { inter } from "../../../styles/fonts"
import Optionsdashboardfixed from "../ui/optionsdashboardfixed"
import Dashboardfixed from "../ui/dashboardfixed"
import Dashboardmain from "../ui/dashboardmain"


function page() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleEditButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <>
    <div className={`flex h-full bg-[#f7f7f7] transition-opacity duration-300 ${isFormVisible ? "opacity-50" : "opacity-100"}`}>

      <Dashboardfixed onClick={handleEditButtonClick}/>
      <Dashboardmain/>
    </div>

    {isFormVisible && (

      <Taskmodal onClose={handleCloseForm}/>
    )}
      </>
  )
}

export default page