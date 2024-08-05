import React from 'react';
import TopLevelContainer from '../shared/TopLevelContainer';    
import {JournalEntries} from '../../../public/dailyJournal';

export default function Page(){
    return <TopLevelContainer>
        {JournalEntries.map(entry => <>
            <h2 className='font-bold'>{`${entry.today.getMonth() + 1}/${entry.today.getDay()}/${entry.today.getFullYear()}`}</h2>
            <div className='py-2'>{entry.subjects.map(subject => <>
                <h3>{subject.title}</h3>
                {subject.book && <div>{subject.book.title} - {subject.book.author}</div>}
                <div>{subject.overview}</div>
                <ul className="pl-5 list-disc">
                    {subject.problems?.map(problem => 
                        <li><a href={problem.link} target='_blank'>{problem.name}</a> - {problem.language}</li>
                    )}
                </ul>
            </>
            )}</div>
        </>)}
    </TopLevelContainer>
}