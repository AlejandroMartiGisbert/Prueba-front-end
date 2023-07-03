import React from 'react'
import DashboardStats from './DashboardStats'
import DashboardOptions from './DashboardOptions'
import DoubleClickChart from './DoubleClickChart'
import Traffic from './Traffic'
import TopCities from './TopCities'

export default function Dashboard()
{
    return (
        <div className='flex flex-col gap-4 p-5' >
             <div className="p-4 flex flex-wrap">
                <DashboardOptions/>
                <DashboardStats/>
                <div className='pt-4 flex w-full'>
                    <DoubleClickChart/>
                </div>
                <div className='data_tables pt-4  overflow-hidden flex flex-row gap-4 w-full'>
                <Traffic/>
                <TopCities/>
                </div>
            </div>
        </div>
    )
}