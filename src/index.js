import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { SocialCardStore } from './contexts/SocialCardContext';

ReactDom.render(
    <SocialCardStore>
        <App/>
    </SocialCardStore>,
    document.querySelector('#root')
);