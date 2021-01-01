import React from 'react';
import { generateList } from '../components/helper_functions/generatedata';

//this creates the context object. We are rendering out a component so we need
//it to have a capital letter. Otherwise it will look like a div, form etc
const Context = React.createContext({});

export class SocialCardStore extends React.Component {
    state = {
        socialCardArr : []
    };

    componentDidMount() {
        const socialCardArr = generateList();
        this.setState({socialCardArr});
    };
    //In this case the state is generated when the application starts. So we are only sharing access to the
    //state. we use children because everything that this component surrounds will then have access to the information inside
    //this component
    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;