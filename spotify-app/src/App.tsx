import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { authEndpoint, clientId, scopes, redirectUri } from './config';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const spotifyLogin = async () => {
    console.log('submitted');
    const endPoint = `${authEndpoint}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      '%20'
    )}&response_type=token&show_dialog=true`;
    await fetch(endPoint, {
      mode: 'no-cors',
    });
    setLoggedIn(true);
  };

  return (
    <div>
      <a
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
          '%20'
        )}&response_type=token&show_dialog=true`}
      >
        Login to Spotify
      </a>
    </div>
  );
}

export default App;
