import React from 'react';
import CardHolder from './card/CardHolder';
import { SocialCardStore } from '../contexts/SocialCardContext';

const App = () => {
    return (
        <SocialCardStore>
            <h2>Social Cards - React Using Context</h2>
            <hr />
            <CardHolder/>
        </SocialCardStore>
    )
};

export default App;

