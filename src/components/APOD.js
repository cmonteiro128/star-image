import React, { Component } from 'react';
import CardView from './Card/CardView';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ModalView from './Modal/ModalView'
//import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
//import { connect } from 'react-redux';
import moment from 'moment-mini';
import './APODStyle.css';
import key from '../apikey.js';

const divStyle = {
  padding: '8px'
};

class APOD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalLoaded: 0,
      open: false,
      listOfImages: []
    };
    // This binding is necessary to make `this` work in the callback
    this.addAPODS = this.addAPODS.bind(this);
  }

  handleOpen = modalTitle => {
    this.setState({
      open: true,
      title: modalTitle
    });
    console.log('Title is ' + modalTitle);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentWillMount() {
    this.getAPODS();
  }

  getImageDay(date) {
    //Export your api key from a separate file
    fetch(
      'https://api.nasa.gov/planetary/apod?api_key=' + key + '&date=' + date
    )
      .then(response => {
        console.log('Called API');
        return response.json();
      })
      .then(imgData => {
        let currentList = this.state.listOfImages;
        currentList.push({
          imgURL: imgData['url'],
          title: imgData['title'],
          explanation: imgData['explanation'],
          subtitle: imgData['copyright'],
          media_type: imgData['media_type'],
          date: imgData['date']
        });
        currentList.sort(function(a, b) {
          return moment(b.date) - moment(a.date);
        });
        console.log('sorted');
        this.setState({ listOfImages: currentList });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  getAPODS() {
    let currentDay = moment().format('YYYY-MM-DD');
    for (let i = 1; i <= 12; i++) {
      this.getImageDay(currentDay);
      currentDay = moment(currentDay).add(-1, 'days').format('YYYY-MM-DD');
    }
    this.setState({ totalLoaded: this.state.totalLoaded + 12 });
  }

  addAPODS() {
    let currentDay = moment()
      .add(-this.state.totalLoaded, 'days')
      .format('YYYY-MM-DD');
    for (let i = 1; i <= 3; i++) {
      this.getImageDay(currentDay);
      currentDay = moment(currentDay).add(-1, 'days').format('YYYY-MM-DD');
    }
    this.setState({ totalLoaded: this.state.totalLoaded + 3 });
  }

  /*
                    <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionAppear={ true }>
                    </CSSTransitionGroup>

*/
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />
    ];
    return (
      <div>
        <div className="row mainParent">
          {this.state.listOfImages.map(object =>
            <div
              key={object.date}
              style={divStyle}
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
            >
              <div className="box">
                <CardView
                  modalTouch={() => this.handleOpen.bind('test')}
                  url={object.imgURL}
                  title={object.title}
                  subtitle={object.subtitle}
                  media_type={object.media_type}
                  explain={object.explanation}
                />
              </div>
            </div>
          )}
        </div>
        <RaisedButton
          label="Load More"
          onTouchTap={this.addAPODS}
          primary={true}
        />
        <ModalView
          title={this.state.title}
          actions={actions}
          modal={true}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default APOD;
