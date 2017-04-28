import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const CardView = ({style, url, title, subtitle, explain}) => (
  <Card style={style}>
    <CardMedia>
        <img height="50%" width="50%" alt='Space is cool' src={url} />
    </CardMedia>
    <CardTitle title={title} subtitle={subtitle} />
    <CardText>{explain}</CardText>
    <CardActions>
      <FlatButton label="Share" />
    </CardActions>
  </Card>
);

export default CardView;