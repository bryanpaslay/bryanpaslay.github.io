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
          <header className="flex bg-blue-100">
            <div className="sm:container mx-auto px-16">
              <div className="flex flex-row">
                <Image className="flex-grow-0" src={'/hero.png'} alt="Image of me" width={100} height={100} />
                <div className="flex-grow">
                <nav>
                  <ul className="flex gap-3 ">
                    <li><Link href={`/`}>Main</Link></li>
                    <li><Link href={`/resume`}>Resume</Link></li>
                    <li><Link href={`/portfolio`}>Portfolio</Link></li>
                    <li><Link href={`/about`}>About me</Link></li>
                  </ul>
                </nav>
                </div>
              </div>
            </div>
          </header>
          {children}
          </body>
      </html>
    )
  }