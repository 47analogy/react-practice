import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';

const Player = props => {
  return (
    <div>
      {props.player ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: '54%' }}
            // image={props.player.fields.playerImage.fields.file.url}
            title={props.player.fields.title}
          />
          <CardContent>
            <Typography gutterBottom variant='headline' component='h2'>
              {props.player.fields.name}
            </Typography>
            <Typography component='p'>
              Position: {props.player.fields.position}
            </Typography>
            <Typography component='p'>
              Home Runs: {props.player.fields.homers}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size='small'
              color='primary'
              href={props.player.fields.url}
              target='_blank'
            >
              Show More Player Info
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};

export default Player;
