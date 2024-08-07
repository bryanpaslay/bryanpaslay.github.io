'use client';
import React, {useState} from 'react';

import Image from "next/image";
import Link from "next/link";

export default function(){

    const menuItems = [
        {link: '/', name:'HOME'},
        {link: '/resume', name:'RESUME'},
        {link: '/portfolio', name:'PROJECTS'},
        {link: '/about', name:'ABOUT ME'},
        {link: '/journal', name:'JOURNAL'},
    ]

    const [isMenuOpen, setMenuOpen] = useState(false);

    return <header id="header" className="bg-gradient-to-b from-blue-300 to-white fixed w-full border-b-slate-100 border-b-2">
        {isMenuOpen && <div id='overlay' className='bg-slate-50/50 h-full w-full fixed' onClick={() => setMenuOpen(false)}></div>}
        <div className="grid grid-cols-8 mx-auto">
            <button className="pt-3 px-5 space-y-2 relative" onClick={() => setMenuOpen(!isMenuOpen)}>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
            </button>
            <Image className="" src={'/hero.png'} alt="Image of me" width={50} height={50} />
            <div className="grid col-span-6  grid-rows-1 content-center">
                <div className="row-start-1 row-end-4  pt-2 text-3xl font-mono">&lt;Bryan Paslay/&gt;</div>
            </div>
        </div>
        <aside className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button className="pt-3 px-5 space-y-2 relative" onClick={() => setMenuOpen(!isMenuOpen)}>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
            </button>
            <nav className={`py-10`}>                        
                <ul className="">
                    {menuItems.map((item) =>  <li className="" onClick={() => setMenuOpen(false)}><Link className="block hover:bg-slate-200 px-4 text-xl" href={item.link}>{item.name}</Link></li>)}
                </ul>
            </nav>
        </aside>
    </header>;
}