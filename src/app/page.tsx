import React from "react";
import Link from "next/link";
import TopLevelContainer from './shared/TopLevelContainer';

export default function Page() {
    return <TopLevelContainer>
      <p>I have put a current version of my <Link className="hover:font-bold" href={`/resume`}>Resume</Link> on the site and have begun adding my <Link className="hover:font-bold" href={`/portfolio`}>Project history</Link>.</p>  
      <p></p>
      <p>This is a react website that uses NextJS as the framework. </p> 
      <p>This site will continue to evolve so please come back and check it out again.</p>
  </TopLevelContainer>;
}