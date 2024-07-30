import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Metadata} from 'next';
import './global.css';

export const metadata : Metadata ={
  title: 'PAZ',
  description: "Bryan Paslay's website",
} 

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <header id="header" className="bg-blue-100">
            <div className="container grid grid-cols-5 mx-auto">
                <Image className="" src={'/hero.png'} alt="Image of me" width={100} height={100} />
                <div className="grid col-span-4 grid-rows-4 content-center">
                  <div className="row-start-1 row-end-4 py-5 text-3xl">Bryan Paslay</div>
                  <nav className="">
                    <ul className="grid grid-cols-4">
                      <li className=""><Link className="hover:font-bold" href={`/`}>Home</Link></li>
                      <li className=""><Link className="hover:font-bold" href={`/resume`}>Resume</Link></li>
                      <li className=""><Link className="hover:font-bold" href={`/portfolio`}>Project history</Link></li>
                      <li className=""><Link className="hover:font-bold" href={`/about`}>About me</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
          </header>
          {children}
          </body>
      </html>
    )
  }