import React, {Component} from 'react';
import CardView from './Card/CardView';
import key from '../apikey.js'

let cardStyle = {
    'marginBottom' : 15,
}

//let imgUrl = 'test'; 

class MainContent extends Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.getImageDay = this.getImageDay.bind(this);

    }

     getImageDay() {
        //Export your api key from a separate file
        fetch('https://api.nasa.gov/planetary/apod?api_key=' + key)
            .then(function(response) {
                return response.json();
                //this.imgurl = response.json().url;
        }).then(function(imgData){
                return imgData['url'];
                //console.log(imgUrl);
        }).catch(function(err) {
            console.log("Oh no!");
        });
    }

    render() {  
        //this.getImageDay();
        const localImgUrl = this.getImageDay(); 
        /*var rows = [];
        for (var i=0; i < 4; i++) {
            rows.push(<CardView key={i} style={cardStyle}/>);
        }*/
        return (
            <div>
                <p className="App-intro">
                    Welcome to NASA Images!
                </p>
                {/*<button onClick={this.getImageDay}>Test</button>*/}
                <div>
                {/*rows*/}
                <CardView url={localImgUrl} style={cardStyle}/>
                </div>
            </div>
        );
    }
}

export default MainContent