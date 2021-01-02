import './CardHeader.css';
import React from 'react';
import SocialContext from '../../contexts/SocialCardContext';

class CardHeader extends React.Component {
    static contextType = SocialContext;

    showContent = () => {
        const {companyName, avatar, firstName, lastName, randomDate} = this.context.socialCardArr[this.props.id];
        if (!companyName) {
           return null;
        } else {
            return (
                <div>
                    <img className="avatar" src={avatar} alt=""/>
                    <div className="headerTextContainer">
                        <p><span className="companyName">{`${companyName}`}</span><span className="makeLightGrey">{` @${companyName.replace(/[^A-Za-z0-9!?]/g,'')}  •  ${randomDate}`}</span></p>
                        <p>{`${this.context.product}`}</p>
                        <p>
                            <span>{`{ author: `}</span>
                            <span className="makeBlue">{`@${firstName.charAt(0)}${lastName}`}</span>
                            <span>{`}`}</span>
                        </p>
                    </div>
                </div>
            )
        }
    };

   render() {
       return(
           <div>
               {this.showContent()}
           </div>
       )
   }
}

export default CardHeader;