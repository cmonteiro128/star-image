import React, {Component} from 'react';
import CardView from './Card/CardView';

let cardStyle = {
    card: {
        'marginBottom' : 15,
    }
}

class MainContent extends Component {
    render() {        
        var rows = [];
        for (var i=0; i < 4; i++) {
            rows.push(<CardView key={i} style={cardStyle.card}/>);
        }
        return (
            <div>
                <p className="App-intro">
                    Welcome to NASA Images!
                </p>
                <div>
                {rows}
                </div>
            </div>
        );
    }
}

export default MainContent