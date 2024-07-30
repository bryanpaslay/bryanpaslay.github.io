import React, {useEffect} from "react";
import PortfolieSection from "./Section";
import {Sections} from "../../../public/portfolioData";

export default function Page() {

    return <>
        <h1 className="py-3 px-10">Project history</h1>
        {Sections.map((section) =>  <PortfolieSection key={section.id} {...section}/>)}
    </>;

}