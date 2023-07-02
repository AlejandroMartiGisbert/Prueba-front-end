import React from 'react'
import {BarChart, CartesianGrid,Legend,Bar, ResponsiveContainer, Tooltip, XAxis, YAxis,LineChart,Line} from 'recharts'
const data = [
    {
        name: '22.04',
        Impressions: 600,
        Click_Rate: 400
    },
    {
        name: '25.04',
        Impressions: 600,
        Click_Rate: 380
    },
    {
        name: '27.04',
        Impressions: 150,
        Click_Rate: 100
    },
    {
        name: '29.04',
        Impressions: 400,
        Click_Rate: 410
    },
    {
        name: '31.04',
        Impressions: 390,
        Click_Rate: 410
    },
    {
        name: '02.05',
        Impressions: 390,
        Click_Rate: 500
    },
    {
        name: '04.05',
        Impressions: 460,
        Click_Rate: 400
    },
    {
        name: '08.05',
        Impressions: 390,
        Click_Rate: 200
    },
    {
        name: '09.05',
        Impressions: 400,
        Click_Rate: 200
    },
    {
        name: '04.05',
        Impressions: 350,
        Click_Rate: 200
    },
    {
        name: '07.05',
        Impressions: 300,
        Click_Rate: 100
    },
    {
        name: '10.05',
        Impressions: 150,
        Click_Rate: 180
    },
    {
        name: '14.05',
        Impressions: 130,
        Click_Rate: 350
    },
    {
        name: '16.05',
        Impressions: 300,
        Click_Rate: 220
    },
    {
        name: '17.05',
        Impressions: 390,
        Click_Rate: 230
    },
    {
        name: '18.05',
        Impressions: 310,
        Click_Rate: 250
    },
    {
        name: '19.05',
        Impressions: 300,
        Click_Rate: 350
    },
    {
        name: '21.05',
        Impressions: 250,
        Click_Rate: 360
    },
    {
        name: '23.05',
        Impressions: 200,
        Click_Rate: 500
    },
]

function DoubleClickChart()
{
    return (
        <div className="w-full bg-white p-4 rounded-sm border border-grey-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">Double Click Campaign Stats</strong>
            <div className="container1">
                <div className="recharts-responsive-container container2">
                <ResponsiveContainer width="100%" height="60%"> 
                <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 750]}/>
                    <Tooltip />
                    <Legend iconType='circle' layout="horizontal" verticalAlign="top" align="center" />
                    <Bar dataKey="Impressions" fill="#f0f0f0" />
                    <Bar dataKey="Click_Rate" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            </div>
            </div>
            
        </div>
    )
}
export default DoubleClickChart