'use client';
import React, {useState} from 'react';

import Image from "next/image";
import Link from "next/link";

export default function(){


    const [isMenuOpen, setMenuOpen] = useState(false);

    return <header id="header" className="bg-gradient-to-b from-blue-300 to-white fixed w-full">
    <div className="container grid grid-cols-5 mx-auto">
    <button className="sm:hidden pt-7 px-5 space-y-2 relative" onClick={() => setMenuOpen(!isMenuOpen)}>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div>
            <nav className={`${!isMenuOpen ? 'hidden' : "" } absolute bottom left-1/2 bg-slate-100 w-32 p-2 outline rounded outline-slate-400 shadow-md`}>                        
              <ul className="">
                <li className=""><Link className="block hover:font-bold hover:bg-slate-200" href={`/`}>HOME</Link></li>
                <li className=""><Link className="block hover:font-bold hover:bg-slate-200" href={`/resume`}>RESUME</Link></li>
                <li className=""><Link className="block hover:font-bold hover:bg-slate-200" href={`/portfolio`}>PROJECTS</Link></li>
                <li className=""><Link className="block hover:font-bold  hover:bg-slate-200" href={`/about`}>ABOUT ME</Link></li>
                <li className=""><Link className="block hover:font-bold  hover:bg-slate-200" href={`/journal`}>STATUS</Link></li>
              </ul>
            </nav>
        </div>
    </button>
      <Image className="" src={'/hero.png'} alt="Image of me" width={100} height={100} />
      <div className="grid col-span-3 sm:col-span-4 grid-rows-1 content-center">
        <div className="row-start-1 row-end-4 py-5 text-3xl font-mono">&lt;Bryan Paslay/&gt;</div>
        <nav className="hidden  sm:block">
          <ul className="grid grid-cols-5">
            <li className=""><Link className="hover:font-bold" href={`/`}>HOME</Link></li>
            <li className=""><Link className="hover:font-bold" href={`/resume`}>RESUME</Link></li>
            <li className=""><Link className="hover:font-bold" href={`/portfolio`}>PROJECTS</Link></li>
            <li className=""><Link className="hover:font-bold" href={`/about`}>ABOUT ME</Link></li>
            <li className=""><Link className="hover:font-bold" href={`/journal`}>STATUS</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
}