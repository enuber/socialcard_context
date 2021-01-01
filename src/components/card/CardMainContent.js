import './CardMainContent.css';
import React from 'react';
import MainContentTopArea from './MainContentTopArea';
import MainContentDescriptionArea from './MainContentDescriptionArea';

const CardMainContent = () => {
    return (
        <div className="mainCard">
            <MainContentTopArea/>
            <MainContentDescriptionArea/>
        </div>
    )
};

export default CardMainContent;