import './MainContentDescriptionArea.css';
import React from 'react';
import SocialContext from '../../contexts/SocialCardContext';

class MainContentDescriptionArea extends React.Component {
    static contextType = SocialContext;

    showDesc = () => {
        const {product, productDesc, webAddress} = this.context;
        if (!product) {
            return null;
        } else {
            return (
                <div className="descContainer">
                    <h2>{product}</h2>
                    <p>{productDesc}</p>
                    <p className="makeLightGrey">{webAddress}</p>
                </div>
            )
        }
    };

    render() {
        return (
            <div>
                {this.showDesc()}
            </div>
        )
    }
}

export default MainContentDescriptionArea;