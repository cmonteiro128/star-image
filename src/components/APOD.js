import React, {Component} from 'react';
import CardView from './Card/CardView';
import key from '../apikey.js';

const divStyle = {
    padding: '8px',
};


class APOD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgURL: '',
            explanation: '',
            title: '',
            subtitle: '',
            listOfImages: [
            ]
        };
        // This binding is necessary to make `this` work in the callback
        this.getImageDay = this.getImageDay.bind(this);

    }

    componentDidMount() {
        this.getAPODS();
    }

    getImageDay(date) {
        //Export your api key from a separate file
        fetch('https://api.nasa.gov/planetary/apod?api_key=' + key + '&date=' + date)
            .then((response) => {
                console.log("Called API");
                return response.json();
        }).then((imgData) => {
                let currentList = this.state.listOfImages.slice();
                currentList.push(
                    {
                        imgURL: imgData['url'],
                        title: imgData['title'],
                        explanation: imgData['explanation'],
                        subtitle: imgData['copyright'],
                        date: imgData['date'],                        
                    }    
                )
                this.setState({listOfImages: currentList});
        }).catch(function(err) {
            console.log(err);
        });
    }

    getAPODS() {
        const moment = require('moment');
        let currentDay = moment().format('YYYY-MM-DD');
        for(let i = 0; i <= 100; i++) {
            this.getImageDay(currentDay);
            currentDay = moment(currentDay).add(-1, 'days').format('YYYY-MM-DD');
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                {this.state.listOfImages.map((object) => (
                    <div key={object.date} style={divStyle} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="box">
                            <CardView url={object.imgURL} title={object.title} subtitle={this.state.subtitle} explain={this.state.explanation} />
                        </div>
                    </div>                
                ))}
                </div>                
            </div>
        );
    }
}

export default APOD