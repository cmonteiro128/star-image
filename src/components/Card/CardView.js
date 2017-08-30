/* eslint camelcase: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styleImg = {
  position: 'absolute',
  top: 0,
  bottom: '50%',
  left: 0,
  right: '50%',
};

const styleTile = {
  overflow: 'hidden',
  position: 'relative',
  paddingBottom: '60%',
};

const CardView = ({ url, title, media_type, modalTouch, activeAPOD }) => {
  const handleOpen = () => {
    modalTouch(activeAPOD);
  };

  return (
    <GridTile
      title={title}
      actionIcon={
        <IconButton>
          <StarBorder color="white" />
        </IconButton>
      }
      containerElement={'div'}
      style={styleTile}
      onTouchTap={handleOpen}
    >
      {media_type === 'video' ? (
        <iframe title={title} width="100%" height="100%" style={styleImg} src={url} />
      ) : (
        <img alt="" style={styleImg} src={url} />
      )}
    </GridTile>
  );
};

/*    <img alt='' style={styleImg} src={url} />   */
CardView.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  media_type: PropTypes.string.isRequired,
  modalTouch: PropTypes.func.isRequired,
};

export default CardView;
