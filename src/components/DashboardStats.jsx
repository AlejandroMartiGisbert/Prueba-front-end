import React from 'react'

function DashboardStats()
{
    return (
        <div className="box-data flex gap-7 w-full text-slate-600">
            <BoxElement><div className="text-center text-sm py-2.5">Clicks</div><div className="font-semibold text-center text-4xl py-1.5">670</div><div className="py-1.5 text-center">^ 169%</div></BoxElement>
            <BoxElement><div className="text-center text-sm py-2.5">Impressions</div><div className="font-semibold text-center text-4xl py-1.5">1,245</div><div className="py-1.5 text-center">^ 285%</div></BoxElement>
            <BoxElement><div className="text-center text-sm py-2.5">CTR</div><div className="font-semibold text-center text-4xl py-1.5">21.0%</div><div className="py-1.5 text-center">^ 89,1%</div></BoxElement>
            <BoxElement><div className="text-center text-sm py-2.5">Click Conversions</div><div className="font-semibold text-center text-4xl py-1.5">32</div><div className="py-1.5 text-center">^ 81,2%</div></BoxElement>
            <BoxElement><div className="text-center text-sm py-2.5">View Conversions</div><div className="font-semibold text-center text-4xl py-1.5">22</div><div className="py-1.5 text-center"> -75%</div></BoxElement>
            <BoxElement><div className="text-center text-sm py-2.5">Total Conversions</div><div className="font-semibold text-center text-4xl py-1.5">250</div><div className="py-1.5 text-center">^ 90.1%</div></BoxElement>
            
        </div>
    )
}
export default DashboardStats

{/*Función que forma un elemento reutilizable con las clases ya añadidas */}
function BoxElement({children}){
    return  <div className="h-5/6 w-5/6  bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center justify-center flex-col dark:bg-slate-900 dark:border-black">{children}</div>
}