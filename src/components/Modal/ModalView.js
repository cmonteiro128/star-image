import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
const ModalView = (props) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={props.handleClose}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      disabled={true}
      onTouchTap={props.handleClose}
    />
  ];

  return (
    <div>
      <Dialog
        title={props.title}
        actions={actions}
        modal={true}
        open={props.open}
      >
        Only actions can close this dialog.
      </Dialog>
    </div>
  );
};

export default ModalView;
