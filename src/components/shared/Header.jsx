import React from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import {Menu} from '@headlessui/react'
import {AiFillBell} from 'react-icons/ai'
export default function Header()
{
    return (
        <div className='headersize bg-white px-4 flex justify-between items-center'>
            <div className='flex justify-between items-center'>
                <div className='text-gray-400 pl-10'> <Link to="/Dashboard">Popular</Link></div>
                <div className='text-gray-400 pl-10'> <Link to="/Dashboard">For You</Link></div>
                <div className='text-gray-400 pl-10'> <Link to="/Dashboard">Messages</Link></div>
            </div>
            <div className='relative'>
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 -translate-x-full left-3</div>"/>
                <input type="text" placeholder="Search messages" className="text-sm focus:outline-none active:outline-none h-10 w-[24rem]"></input>
            </div>
            <div>
                <Menu as="div" className="relative">
                    <div className="inline-text userlogin text-gray-400">
                        <div className='userloginelement '>
                        <AiFillBell fontSize={25}/>
                        </div>
                        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-slate-50 hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        <Menu.Button className="userloginelement ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            <span className="sr-only">User Menu</span>
                            <div className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center" style={{backgroundImage: 'url("https://source.unsplash.com/80x80?face")'}}>
                            <span className="sr-only">David</span>
                            </div>
                        </Menu.Button>
                        <div className='text-slate-800 userloginelement'>
                            UserName
                        </div>
                            <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Data</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                            </ul>
                        </div>
                        
                    </div>
                </Menu>
            </div>
        </div>
    )
}