import React from 'react';
//import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridTile} from 'material-ui/GridList';
//import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
//import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

/*const styleButton = {
  margin: 12,
};


/*const CardView = ({style, url, title, subtitle, explain}) => (
  <Card style={style}>
    <CardMedia>
        <img height="50%" width="50%" alt='' src={url} />
    </CardMedia>
    <CardTitle title={title} subtitle={subtitle} />
    <CardText>{explain}</CardText>
    <CardActions>
      <RaisedButton style={styleButton} primary={true} label="Share" />
    </CardActions>
  </Card>
);*/
const styleImg = {
      position: 'relative',
      float: 'left',
      width: '100%',
      minHeight: '400px',
      minWidth: '664px',
      overflow: 'hidden',
      height: '100% !important'
};

const CardView = ({style, url, title, subtitle, explain}) => (
  <GridTile
  title={title}
  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
  >
    <img alt='' style={styleImg} src={url} />
  </GridTile>
);
export default CardView;