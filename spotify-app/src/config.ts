import dotenv from 'dotenv';
dotenv.config();

export const { clientId } = process.env;
export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const redirectUri = 'http://localhost:3000';
export const scopes = [
  'user-top-read',
  'user-read-currently-playing',
  'user-read-playback-state',
];
