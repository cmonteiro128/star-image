import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
const ModalView = (props) => {
  const actions = [<FlatButton label="Close" primary onTouchTap={props.closeModal} />];
  return (
    <div>
      <Dialog
        title={props.apodInfo.title}
        actions={actions}
        open={props.open}
        onRequestClose={props.closeModal}
        style={{ textAlign: 'center' }}
      >
        {props.apodInfo.media_type === 'video' ? (
          <iframe
            title={props.apodInfo.title}
            width="100%"
            height="100%"
            src={props.apodInfo.url}
          />
        ) : (
          <img alt="" style={{ maxWidth: '80%', height: 'auto' }} src={props.apodInfo.url} />
        )}{' '}
        <p>{props.apodInfo.explanation}</p>
      </Dialog>
    </div>
  );
};

export default ModalView;
