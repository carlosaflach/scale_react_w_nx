/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
// import * as path from 'path';
import { getAllGames, getGame } from './app/games.repository';

const app = express();

app.get('/api/games', (req, res) => {
  res.send(getAllGames());
});

app.get('/api/games/:id', (req, res) => {
  res.send(getGame(req.params.id))
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
