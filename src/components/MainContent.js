import React, {Component} from 'react';
import CardView from './Card/CardView';
import key from '../apikey.js';

let cardStyle = {
    'marginBottom' : 15,
}


class MainContent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            imgURL: '',
            explanation: '',
            title: '',
            subtitle: ''
        };
        // This binding is necessary to make `this` work in the callback
        this.getImageDay = this.getImageDay.bind(this);

    }

    componentDidMount() {
        this.getImageDay();
    }

    getImageDay() {
        //Export your api key from a separate file
        fetch('https://api.nasa.gov/planetary/apod?api_key=' + key)
            .then((response) => {
                return response.json();
        }).then((imgData) => {
                this.setState({
                    imgURL: imgData['url'],
                    explanation: imgData['explanation'],
                    title: imgData['title'],
                    subtitle: imgData['copyright'],    
                })
        }).catch(function(err) {
            console.log(err);
        });
    }

    render() {          
        //const localImgUrl = this.imgurl; 
        /*var rows = [];
        for (var i=0; i < 4; i++) {
            rows.push(<CardView key={i} style={cardStyle}/>);
        }*/
        return (
            <div>
                {/*rows*/}
                <CardView url={this.state.imgURL} style={cardStyle} title={this.state.title} subtitle={this.state.subtitle} explain={this.state.explanation} />
            </div>
        );
    }
}

export default MainContent