import React from 'react'

const cities_data = [
    {
        id: '0',
        city: 'Otawa',
        Customers: '106'
    },
    {
        id: '1',
        city: 'Toronto',
        Customers: '55'
    },{
        id: '2',
        city: 'New York',
        Customers: '54'
    },{
        id: '3',
        city: 'Calgary',
        Customers: '7'
    }
]

function TopCities()
{
    return (
        <div className="w-1/3 bg-white pt-4 pb-4 rounded-sm border border-gray-200">
            <div className='mt-3 '>
                <table className="w-full text-gray-700">
                <thead className='bg-white table-auto'>
                        <tr >
                            <th >City</th>
                            <th>Customers</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cities_data.map((traffic) =>(
                            <tr key={traffic.id}>
                                <td>{traffic.city}</td>
                                <td>{traffic.customers}</td>
                                <td>
                                    <div className="w-full bg-gray-200 rounded-full w-2/4 h-1.5 dark:bg-gray-700">
                                        <div className="bg-blue-600 h-2.5 rounded-full w-1/4 ">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}
export default TopCities