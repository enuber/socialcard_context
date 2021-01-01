import './MainContentTopArea.css';
import React from 'react';
import SocialContext from '../../contexts/SocialCardContext';

class MainContentTopArea extends React.Component {
    static contextType = SocialContext;

    //changing light colors for darker colors in background
    checkColor = color => {
        switch (color) {
            case 'azure':
                color = 'red';
                break;
            case 'ivory':
                color = 'turquoise';
                break;
            case 'lavender':
                color = 'purple';
                break;
            case 'mint green':
                color = 'green';
                break;
            case 'sky blue':
                color = 'blue';
                break;
            case 'white':
                color = 'black';
                break;
            case 'yellow':
                color = 'salmon';
                break;
            default:
                break;
        }
        return color;
    };

    showTopContent = () => {
        const {avatar, color, firstName, lastName, personalPic, product} = this.context;
        if (!avatar) {
            return null;
        } else {
            let correctColor = this.checkColor(color);
            return (
                <div style={{
                    backgroundColor: `${correctColor}`,
                    borderRadius: '10px 10px 0 0'
                }}>
                    <div className="topAreaContainer">
                        <img className="avatarMainContent" src={avatar} alt="" />
                        <h1>{product}</h1>
                        <div className="nameContainer">
                            <span className="nameOfPerson"
                                  style={{color: `${correctColor}`
                            }}>
                                {`${firstName} ${lastName}`}
                            </span>
                            <img className="personalPic" src={personalPic} alt="" />
                        </div>
                    </div>
                </div>
            )
        }
    };
    render() {
        return (
            <div>
                {this.showTopContent()}
            </div>
        )
    }
}

export default MainContentTopArea;