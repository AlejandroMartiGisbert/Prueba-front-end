import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout()
{
    return (
        <div className='flex flex-row bg-neutral-100 h-screen overflow-hiden'>
           <Sidebar />
           <div className="flex-l w-full">
                <Header/>
                <div className='bg-teal-200'>header</div>
                <div>{<Outlet/>}</div>
           </div>
        </div>
    )
}