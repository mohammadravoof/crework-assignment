import React from 'react'
import { Barlow } from '@next/font/google'
import { barlow,inter } from '../../../styles/fonts'
import Image from 'next/image'
import Bannerdashboard from './bannerdashboard'
import Nexttosearchoptions from './nexttosearchoptions'
import Dashboardmainheader from './dashboardmainheader'
import Dashboardmainfunctional from './dashboardmainfunctional'

function Dashboardmain() {
  return (
    <div className="flex flex-col w-full h-screen gap-4 ml-[18.813rem] mr-8 mt-6">
        <Dashboardmainheader/>
        <Dashboardmainfunctional/>
    </div>
  )
}

export default Dashboardmain