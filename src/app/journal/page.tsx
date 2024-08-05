import React from 'react';
import TopLevelContainer from '../shared/TopLevelContainer';    
import {JournalEntries} from '../../../public/dailyJournal';

export default function Page(){
    return <TopLevelContainer>
        {JournalEntries.map(entry => <>
            
        </>)}
    </TopLevelContainer>
}