import React from "react";
import Link from "next/link";
import TopLevelContainer from './shared/TopLevelContainer';

export default function Page() {
    return <TopLevelContainer>
      <h1>Home</h1>
      <p>I am starting to work on my personal website and it is still a work in progress.  I have put a current version of my <Link className="hover:font-bold" href={`/resume`}>Resume</Link> on the site and have begun adding my <Link className="hover:font-bold" href={`/portfolio`}>Project history</Link>.  This site will continue to evolve so please come back and check it out again.</p>
  </TopLevelContainer>;
}