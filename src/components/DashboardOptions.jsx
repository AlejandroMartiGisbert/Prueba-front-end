import React from 'react'
import {RiDashboardFill} from 'react-icons/ri'

function DashboardOptions()
{
    return (
        <div className='dashboardopt w-full pb-5' >
                <div className='child flex justify-between items-center text-gray-400'>
                    <div className='flex content-center'>
                        <div className='mr-0'>
                            <RiDashboardFill fontSize={25}/>
                        </div>
                        <strong>Dashboard</strong>
                    </div> 
                    
                </div>    
                <div className='child pl-5'>           
                    <div className='border-solid border-2 rounded-full hide_small_screen flex justify-between items-center'>
                        <div className='text-gray-400 dark:text-white p-3 border-r-2'> Today</div>
                        <div className='text-gray-400 dark:text-white p-3 border-r-2'> Week</div>
                        <div className='text-gray-400 dark:text-white p-3 border-r-2'> Month</div>
                        <div className='text-gray-400 dark:text-white p-3 border-r-2'> Quarter</div>
                        <div className='text-gray-400 dark:text-white p-3'> Year</div>
                    </div>
                    
                </div>
                <div className='pl-2 child'> 
                </div>
                <div className="child">
                    <div className=' border-solid border-2 rounded-full hide_small_screen flex justify-between items-center'>
                        <div className='text-gray-400 dark:text-white p-3'> Add Widget +</div>
                </div>
                </div>
                
        </div>
    )
}
export default DashboardOptions