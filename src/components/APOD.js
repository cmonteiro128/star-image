import React, {Component} from 'react';
import CardView from './Card/CardView';
import key from '../apikey.js';

let cardStyle = {
    'marginBottom' : 15,
}


class APOD extends Component {
    
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
        //this.getTodayApod();
    }

    getImageDay() {
        //Export your api key from a separate file
        fetch('https://api.nasa.gov/planetary/apod?api_key=' + key)
            .then((response) => {
                console.log("Called API");
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

    getTodayApod() {
        const moment = require('moment');
        let imageLink = 'https://apod.nasa.gov/apod/ap' + moment().format('YYMMDD') + '.html';
        console.log(imageLink);
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
                <div className="row">
                    <div className="col-lg-6">
                        <CardView url={this.state.imgURL} style={cardStyle} title={this.state.title} subtitle={this.state.subtitle} explain={this.state.explanation} />
                    </div>
                    <div className="col-lg-6">
                        <CardView url={this.state.imgURL} style={cardStyle} title={this.state.title} subtitle={this.state.subtitle} explain={this.state.explanation} />
                    </div>
                </div>                
            </div>
        );
    }
}

export default APOD