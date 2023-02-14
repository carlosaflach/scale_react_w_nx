// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';

import { Header } from '@nxegghead/store/ui-shared';

import { formatRating } from '@nxegghead/store/util-formatters';
import {Routes, useNavigate} from 'react-router-dom'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import { Route } from 'react-router-dom';

import { StoreFeatureGameDetail } from '@nxegghead/store/feature-game-detail';
import { useEffect, useState } from 'react';
import { Game } from '@nxegghead/api/util-interfaces';

export function App() {
  const [state, setState] = useState<{
    data: Game[],
    loadingState: 'success' | 'error' | 'loading'
  }>({
    data: [],
    loadingState: 'success'
  })

  useEffect(() => {
    setState((s) => ({
      ...s,
      loadingState: 'success',
    }))

    fetch('/api/games').then((x) => x.json()).then((res) => setState((state) => ({
      ...state,
      data: res,
      loadingState: 'loading',
    }))).catch((err) => {
      setState((state) => ({
        ...state,
        loadingState: 'error',
      }))
    })
  }, [])

  const navigate = useNavigate();
  return (
    <>
      <Header title="Board Game Hoard" />
      <div className="container">
        <div className="games-layout">
          {state.loadingState === 'loading' ? 'Loading...' : state.loadingState === 'error' ?  '<div>Error retrieving data </div>': (state.data.map((x) => (
            <Card key={x.id} className="game-card"
            onClick={ () => navigate(`/game/${x.id}`)}
          >
            <CardActionArea>
              <CardMedia
                className="game-card-media"
                image={x.image}
                title={x.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {x.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {x.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="game-rating"
                >
                  <strong>Rating: </strong> {formatRating(x.rating)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          )))}
        </div>
      </div>
      <Routes>
      <Route
          path="/game/:id"
          element={<StoreFeatureGameDetail />}
        />
      </Routes>
    </>
  );
}

export default App;
