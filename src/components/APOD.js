import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardView from './Card/CardView';

// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import ModalView from './Modal/ModalView';
import './APODStyle.css';
import { loadInitialAPOD, loadMoreAPODs, setActiveModal, closeModal } from '../actions/apod';

class APOD extends Component {
  componentWillMount() {
    const { loadInitialAPOD } = this.props;
    loadInitialAPOD();
  }

  /*
                    <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionAppear={ true }>
                    </CSSTransitionGroup>

*/
  render() {
    // Dispatchers
    const { setActiveModal, closeModal, loadMoreAPODs } = this.props;
    // State
    const { listOfImages, showModal, activeAPOD } = this.props;

    return (
      <div>
        <div className="row mainParent">
          {listOfImages.map(object => (
            <div
              key={object.date}
              style={{ padding: '8px' }}
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
            >
              <div className="box">
                <CardView
                  modalTouch={setActiveModal}
                  activeAPOD={object}
                  url={object.url}
                  title={object.title}
                  subtitle={object.copyright}
                  media_type={object.media_type}
                  explain={object.explanation}
                />
              </div>
            </div>
          ))}
        </div>
        <RaisedButton label="Load More" onTouchTap={loadMoreAPODs} primary />
        <ModalView apodInfo={activeAPOD} modal open={showModal} closeModal={closeModal} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listOfImages: state.APOD.list,
    showModal: state.APOD.showModal,
    activeAPOD: state.APOD.activeAPOD,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { loadInitialAPOD, loadMoreAPODs, setActiveModal, closeModal },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(APOD);
