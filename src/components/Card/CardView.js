import React from 'react';
import PropTypes from 'prop-types';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ImageLoader from 'react-imageloader';

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
      'paddingBottom': '60%'
};

function preloader() {
  return <img src="/img/spinner.gif" alt=''/>;
}

const CardView = ({url, title, subtitle, explanation, media_type, modalTouch}) => (
    <GridTile
    title={title}
    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
    containerElement={'div'}
    style={styleTile}
    onTouchTap={modalTouch}
    >
    {media_type === 'video' ? (
      <iframe title={title} width="100%" height="100%" style={styleImg} src={url} />
    ) : (
        <ImageLoader
          src={url}
          style={styleImg}
          wrapper={React.DOM.div}
          preloader={preloader}>
          Image load failed!
        </ImageLoader>
    )}
    </GridTile>
);

/*    <img alt='' style={styleImg} src={url} />   */
CardView.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  explanation: PropTypes.string,
  media_type: PropTypes.string.isRequired,
  modalTouch: PropTypes.func.isRequired
}

export default CardView;