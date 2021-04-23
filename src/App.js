import React, {useEffect, useState} from 'react';
import "./App.css";
import Login from "./Login";
import {getTokenFromUrl} from './spotify.js';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from'./Player.js'
import { useDataLayerValue} from './DataLayer'

const spotify = new SpotifyWebApi();

function App() {
  //destructure the DataLayer array to receive the value of user
  const [{ user, token }, dispatch] = useDataLayerValue();
  //"Hook" Run code based on a given condition --> runs always, when a variable in the array gets updated/created
  useEffect(() => {
    const hash = getTokenFromUrl();
    //Takes the Accesstoken out of the URL
    window.location.hash="";
    //Underscore for tmpVariable
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })


      spotify.setAccessToken(_token);
      //Testing the functionality of the token
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>{ 
      dispatch ({
        type: 'SET_PLAYLISTS',
        playlists: playlists,
      });
    });

    spotify.getPlaylist('37i9dQZEVXcNHSNhjQs6LB').then((response) => {
      dispatch({  
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response,
      });
    });


    }
    
    console.log('I HAVE A TOKEN ', token);
  }, []);

  console.log ('User: ', user);
  console.log ('Token: ', token);
  return (
    <div className="app">
      {
        token ? 
          <Player spotify={spotify}/>
          : 
          <Login />
      }
    </div>
  );
}

export default App;
