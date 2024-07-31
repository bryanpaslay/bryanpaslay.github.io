import React from "react";
import {Section} from "../../../public/portfolioData";

export default function PortfolieSection({id, title, details, overview, skills, metrics, tools, startDate, endDate} : Section){

    return <div className={`py-3 px-10 ${id%2 && 'bg-slate-100'}`}>
        <h2>{title} {`${startDate.getMonth() + 1}/${startDate.getFullYear()}`} &mdash; {`${endDate.getMonth() + 1}/${endDate.getFullYear()}`}</h2>
        <h3>{overview}</h3>
        <ul className="pl-5 list-disc">
            {details.map((detail, i) => 
                <li key={i}>
                    {detail}
                </li>
            )}
        </ul>
        <h3>Metrics: </h3>
        <ul className="pl-5 list-disc">
            {metrics.map((metric, i) => 
                <li key={i}>
                    {metric}
                </li>
            )}
        </ul>
        <div className="italic">Tools: {tools.map((tool => tool)).join(' | ')}</div>
        <div className="italic">Skills: {skills.map((skill => skill)).join(' | ')}</div>
    </div>;
};