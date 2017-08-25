import React, { Component } from "react";
import CardView from "./Card/CardView";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import ModalView from "./Modal/ModalView";
import "./APODStyle.css";
import {loadInitialAPOD, loadMoreAPODs} from '../actions/apod';

class APOD extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
    // This binding is necessary to make `this` work in the callback
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen = modalTitle => {
    this.setState({
      open: true,
      title: modalTitle
    });
    console.log("Title is " + modalTitle);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentWillMount() {
    this.props.loadInitialAPOD();
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
          {this.props.listOfImages.map(object =>
            <div
              key={object.date}
              style={{'padding': '8px'}}
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
            >
              <div className="box">
                <CardView
                  modalTouch={this.handleOpen}
                  url={object.url}
                  title={object.title}
                  subtitle={object.copyright}
                  media_type={object.media_type}
                  explain={object.explanation}
                />
              </div>
            </div>
          )}
        </div>
        <RaisedButton
          label="Load More"
          onTouchTap={this.props.addAPODS}
          primary={true}
        />
        <ModalView
          title={this.state.title}
          actions={actions}
          modal={true}
          handleClose={this.handleClose}
          open={this.state.open}
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    listOfImages : state.APOD.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadInitialAPOD: bindActionCreators(loadInitialAPOD, dispatch),
    addAPODS: bindActionCreators(loadMoreAPODs, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(APOD);
