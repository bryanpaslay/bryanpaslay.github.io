import React from "react";
import {Metadata} from 'next';
import './global.css';
import Header from './shared/Header';

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
          <Header></Header>
          <section className="pt-32 py-3 px-10 ">
            {children}
          </section>
        </body>
      </html>
    )
  }