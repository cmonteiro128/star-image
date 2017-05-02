import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const styleButton = {
  margin: 12,
};


const CardView = ({style, url, title, subtitle, explain}) => (
  <Card style={style}>
    <CardMedia>
        <img height="50%" width="50%" alt='Space is cool' src={url} />
    </CardMedia>
    <CardTitle title={title} subtitle={subtitle} />
    <CardText>{explain}</CardText>
    <CardActions>
      <RaisedButton style={styleButton} primary={true} label="Share" />
    </CardActions>
  </Card>
);

export default CardView;