import React from 'react'
import {FcMenu} from 'react-icons/fc'
import {Link,useLocation} from 'react-router-dom'
import {SIDEBAR_LINKS,WEBINTEFACE_LINKS,CONTACTS_LINKS} from '../../lib/consts/navigation'
import classNames from 'classnames';
import {Menu} from '@headlessui/react'

const linkClasses='gap-2 font-light hover:bg-neutral-700 hover:no-underline cative:bg-neutral-600 rounded-sm text-base';
const linkClasses2='text-neutral-100 text-2xl text-neutral-100';
const linkClasses3='bg-inherit flex justify-center pt-5 pb-5 text-neutral-100';

export default function Sidebar()
{
    return (
        <div className='flex flex-row'>
            <div className='sidebar w-20 pt-3 flex flex-col text-white'>
                <div className='h-20 flex justify-center pt-3 pb-10 border-b border-neutral-400'>
                    <a><FcMenu fontSize={30}/></a>
                </div>
                <div className='flex-1'> 
                {SIDEBAR_LINKS.map((item) => (
                        <SidebarLink key={item.key} item={item} />
                ))}
                </div> 
                
                <div>  </div> 
            </div>
            
            <div className='subsidebar bg-white w-44 pt-3 flex flex-col text-white'>
                <div className="h-20 flex items-center justify-center border-b border-neutral-400">
                    <div className="text-gray-400 mx-auto ">Web Interface</div>
                </div>
                <div className='flex-initial border-b border-neutral-400'> 
                    <div className="pl-8 py-5 text-gray-400 mx-auto">Dashboard</div>
                    <div className='pl-8'>
                        {WEBINTEFACE_LINKS.map((item) => (<SidebarWebInterface key={item.key} item={item} />))}
                    </div>
                </div>
            
                <div className='flex-1 border-b border-neutral-400 overflow-scroll scrollbar-hide'> 
                    <div className="pl-8 py-5 text-gray-400 mx-auto">Contacts</div>
                    <div className=''>
                        {CONTACTS_LINKS.map((item) => (<SIDEBAR_CONTACTS key={item.key} item={item} />))}
                    </div>
                </div>
            </div>
        </div>
    )
}
function SidebarLink({item}){
    const {pathname}=useLocation();

    return(
        
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-sky-700' : 'bg-inherit', linkClasses)}>
           
            <div className={classNames(pathname === item.path ? 'text-neutral-100' : 'text-slate-500', linkClasses3)}>
                <span className={classNames(pathname === item.path ? 'text-neutral-100' : 'text-slate-500', linkClasses2)}>
                    {item.icon}</span>
            </div>
        </Link>
    )
}
function SidebarWebInterface({item}){
    const {pathname}=useLocation();
    return(
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-slate-50' : 'bg-inherit')}>
            <div className='bg-white flex justify-left pt-2 pb-2 hover:bg-slate-200'>
                <span className='text-slate-800 text-sm'>{item.label}</span>
            </div>
        </Link>
    )
}
function SIDEBAR_CONTACTS({item}){
    const {pathname}=useLocation();
    return(
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-slate-50' : 'bg-inherit')}>
            <div className='bg-white flex justify-left pt-2 pb-2 hover:bg-slate-200'>
                <Menu as="div" className="relative">
                    <div className="inline-text userlogin">
                        <Menu.Button className="userloginelement ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            <span className="sr-only">User Menu</span>
                            <div className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center" style={{backgroundImage: 'url("https://source.unsplash.com/80x80?face")'}}>
                            </div>
                        </Menu.Button>
                        <div className='text-slate-800 userloginelement'>
                        {item.label}
                        </div>
                    </div>
                </Menu>
            </div>
        </Link>
    )
}