import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout()
{
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hiden'>
           <Sidebar />
           <div className="flex-l">
            <Header/>
           <div className='bg-teal-200'>header</div>
                <div>{<Outlet/>}</div>
           </div>
        </div>
    )
}