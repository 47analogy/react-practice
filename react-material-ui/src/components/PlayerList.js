import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';
import Player from '../components/Player';

// add these
const SPACE_ID = '';
const ACCESS_TOKEN = '';

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

class PlayerList extends Component {
  state = {
    players: [],
    searchStr: '',
  };

  constructor() {
    super();
    this.getPlayers();
  }

  getPlayers = () => {
    client
      .getEntries({
        content_type: 'player',
        query: this.state.searchStr,
      })
      .then(res => {
        this.setState({ players: res.items });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onSearchChange = event => {
    if (event.target.value) {
      this.setState({ searchStr: event.target.value });
    } else {
      this.setState({ searchStr: '' });
    }
    this.getPlayers();
  };

  render() {
    return (
      <div>
        {this.state.players ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id='searchInput'
              placeholder='Enter player name'
              onChange={this.onSearchChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.players.map(player => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Player player={player} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          'No players on roster'
        )}
      </div>
    );
  }
}
export default PlayerList;
