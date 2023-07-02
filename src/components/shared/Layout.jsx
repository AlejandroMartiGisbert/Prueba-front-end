import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout()
{
    return (
        <div className='noscrollbar overflow-scroll flex flex-row bg-neutral-100 h-screen overflow-hiden'>
           <Sidebar />
           <div className="overflow-auto h-full flex-l w-full">
                <Header/>
                <div className='noscrollbar content overflow-scroll'>
                    <div className='flex-grow: 1;'>
                        {<Outlet/>}
                    </div>
                </div>
           </div>
        </div>
    )
}