import React from 'react'
import {FcMenu} from 'react-icons/fc'
import {Link} from 'react-router-dom'
import {SIDEBAR_LINKS} from '../../lib/consts/navigation'

const linkClasses2 = 'flex items-center gap-2 font-light px-3 py-3 hover:bg-neutral-700 hover:no-underline cative:bg-neutral-600 rounded-sm text-base';
const linkClasses = 'flex justify-center pt-3 pb-3 ';
const linkClasses3='gap-2 font-light hover:bg-neutral-700 hover:no-underline cative:bg-neutral-600 rounded-sm text-base';
export default function Sidebar()
{
    return (
        <div className='sidebar w-20 pt-3 flex flex-col text-white'>
            <div className='flex justify-center pt-3 pb-10 '>
                <FcMenu fontSize={30}/>
                <span className='text-neutral -100 text-lg'></span>
            </div>
            <div className='flex-1'> 
            {SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
            ))}
            </div> 
            
            <div>  </div> 
        </div>
    )
}
function SidebarLink({item}){
    return(
        
        <Link to={item.path} className={linkClasses3}>
           
            <div className=' flex justify-center pt-5 pb-5 hover:bg-sky-700'>
                <span className='text-neutral -100 text-2xl'>{item.icon}</span>
            </div>
        </Link>
    )
}