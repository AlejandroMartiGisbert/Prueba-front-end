import React from 'react'

const traffic_data = [
    {
        channel: 'Direct',
        sessions: '600',
        traffic: '400',
        goal_Rate:'3.5%',
        goals:'118',
        bBar:'10'
    },
    {
        channel: 'Email',
        sessions: '800',
        traffic: '300',
        goal_Rate:'4.5%',
        goals:'108',
        bBar:'10'
    },
    {
        channel: 'Organic Search',
        sessions: '600',
        traffic: '400',
        goal_Rate:'3.5%',
        goals:'118',
        bBar:'10'
    }
    ,
    {
        channel: 'Paid Search',
        sessions: '600',
        traffic: '400',
        goal_Rate:'3.5%',
        goals:'118',
        bBar:'10'
    },
    ,
    {
        channel: 'Referral',
        sessions: '600',
        traffic: '400',
        goal_Rate:'3.5%',
        goals:'118',
        bBar:'10'
    }
]

function traffic()
{
    return (
        <div className="w-2/3 bg-white pt-4 pb-4 rounded-sm border border-gray-200">
            <div className='mt-3 '>
                <table className="w-full text-gray-700">
                <thead className='bg-white'>
                        <tr >
                            <th >Chanel</th>
                            <th>Sessions</th>
                            <th>% of traffic</th>
                            <th>Goal Rate</th>
                            <th>Goals</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {traffic_data.map((traffic) =>(
                            <tr key={traffic.channel}>
                                <td>{traffic.sessions}</td>
                                <td>{traffic.traffic}</td>
                                <td>{traffic.goal_Rate}</td>
                                <td>{traffic.goals}</td>
                                <td>{traffic.bBar}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}
export default traffic