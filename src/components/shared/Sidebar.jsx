import React from 'react'
import {FcMenu} from 'react-icons/fc'
import {Link,useLocation} from 'react-router-dom'
import {SIDEBAR_LINKS} from '../../lib/consts/navigation'
import classNames from 'classnames';

const linkClasses2 = 'flex items-center gap-2 font-light px-3 py-3 hover:bg-neutral-700 hover:no-underline cative:bg-neutral-600 rounded-sm text-base';
const linkClasses3 = 'flex justify-center pt-3 pb-3 ';
const linkClasses='gap-2 font-light hover:bg-neutral-700 hover:no-underline cative:bg-neutral-600 rounded-sm text-base';
export default function Sidebar()
{
    return (
        <div className='sidebar w-20 pt-3 flex flex-col text-white'>
            <div className='flex justify-center pt-3 pb-10 border-b border-neutral-400'>
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
    const {pathname}=useLocation();

    return(
        
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-sky-700' : 'bg-inherit', linkClasses)}>
           
            <div className='bg-inherit flex justify-center pt-5 pb-5 hover:bg-slate-500'>
                <span className='text-neutral -100 text-2xl'>{item.icon}</span>
            </div>
        </Link>
    )
}