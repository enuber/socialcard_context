import './CardHolder.css'
import React from 'react';
import CardHeader from './CardHeader';
import CardMainContent from './CardMainContent';
import SocialContext from '../../contexts/SocialCardContext';

class CardHolder extends React.Component {
    static contextType = SocialContext;

    renderCardHolder = () => {
        const {socialCardArr} = this.context;
        const cards = socialCardArr.map(card =>
            (
                <CardHolder key={card.key}>
                    <CardHeader/>
                    <CardMainContent/>
                </CardHolder>
            )
        );
        debugger;
        return cards;
    };

    render() {
        return(
            <div>
                {this.renderCardHolder()}
                <hr />
            </div>
        )
    }
};

export default CardHolder;