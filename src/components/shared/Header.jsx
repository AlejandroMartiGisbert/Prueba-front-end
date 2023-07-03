import React, { useState } from 'react';
import {HiOutlineSearch} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import {Menu} from '@headlessui/react'
import {AiFillBell} from 'react-icons/ai'
export default function Header()
{
    
    async function getRandomUser()
    {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json();
        const user = data.results[0];
        updateUser(user)
    }
    function updateUser(user)
    {
        const name = document.getElementById('username');
        const image2 = document.getElementById('userimage');
        const imagedata = user.picture.medium;
        name.innerText = `${user.name.first} ${user.name.last}`;
        //image.setAttribute('src' , `${user.picture.medium}`);
        const userImage = document.getElementById('userimage');
        userImage.style.backgroundImage = `url('${imagedata}')`;
        console.log("newuser:" + user.name.first);
    }
    // Llamar a getRandomUser cada 10 segundos
    setInterval(getRandomUser, 10000);
    return (
        <div className='flex-none headersize border-l-2 border-neutral-400 bg-white dark:bg-slate-900 px-4 flex justify-between items-center'>
            <div className='hide_small_screen flex justify-between items-center'>
                <div className='text-gray-400 dark:text-white pl-10'> <Link to="/Dashboard">Popular</Link></div>
                <div className='text-gray-400 dark:text-white pl-10'> <Link to="/Dashboard">For You</Link></div>
                <div className='text-gray-400 dark:text-white pl-10'> <Link to="/Dashboard">Messages</Link></div>
            </div>
            <div className='hide_small_screen flex justify-between items-center'>
                <div className='relative hide_small_screen'>
                    <HiOutlineSearch fontSize={20} className="text-gray-400 dark:text-white absolute top-1/2 -translate-y-1/2 left-3</div>"/>
                    <input className='search' type="text" placeholder="Search messages" className="text-sm border-none h-10 w-[24rem]"></input>
                </div>
            </div>
            
            <div>
                <Menu as="div" className="relative ">
                    <div className="inline-text userlogin text-gray-400 dark:text-white ">
                        <div className='userloginelement dark:bg-slate-900'>
                        <AiFillBell fontSize={25}/>
                        </div>
                        <button onClick={getRandomUser} className="text-white bg-slate-50 hover:bg-slate-100 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-slate-700 dark:focus:ring-grey-800 dark:bg-slate-900 dark:border-black" type="button">
                            <span className="sr-only">User Menu</span>
                            <div id="userimage" className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"style={{backgroundImage: 'url("https://source.unsplash.com/80x80?face")'}}></div>
                            <div id="username" className='text-slate-800 userloginelement '>
                                UserName
                            </div>
                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Data</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                            </ul>
                        </div>
                        
                    </div>
                </Menu>
            </div>
        </div>
    )
}