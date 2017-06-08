import React from 'react';
import PropTypes from 'prop-types';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styleImg = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  //margin: 'auto',
};

const styleTile = {
      overflow: 'hidden',
      position: 'relative',
      'paddingBottom': '60%'
};

const CardView = ({url, title, subtitle, explanation, media_type}) => (

    <GridTile
    title={title}
    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
    containerElement={'div'}
    style={styleTile}
    >
    {media_type === 'video' ? (
      <iframe title={title} width="100%" height="100%" style={styleImg} src={url} />
    ) : (
      <img alt='' style={styleImg} src={url} />   
    )}
    </GridTile>
);

CardView.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  explanation: PropTypes.string,
  media_type: PropTypes.string.isRequired
}

export default CardView;