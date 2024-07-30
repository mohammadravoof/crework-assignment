import Taskmodal from "../ui/taskmodal"
import Image from "next/image"
import Link from "next/link"
import { inter } from "../../../styles/fonts"
import Optionsdashboardfixed from "../ui/optionsdashboardfixed"
import Dashboardfixed from "../ui/dashboardfixed"
import Dashboardmain from "../ui/dashboardmain"


function page() {
  return (
    <>
    <div className="flex bg-[#f7f7f7] h-full">

      <Dashboardfixed/>
      <Dashboardmain/>
    </div>
      <Taskmodal/>
      </>
  )
}

export default page