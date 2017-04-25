import React, {Component} from 'react';
import CardView from './Card/CardView';

class MainContent extends Component {
    render() {
        return (
            <div>
                <p className="App-intro">
                    Welcome to NASA Images!
                </p>
                <CardView />
            </div>
        );
    }
}

export default MainContent