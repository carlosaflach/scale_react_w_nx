// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss'
import {getAllGames } from '../fake-api';

import {Header} from '@nxegghead/store/ui-shared'

import { formatRating } from  '@nxegghead/store/util-formatters'

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

export function App() {
  return (
    <>
    <Header />
    <div className="container">
      <div className='games-layout'>
        {getAllGames().map((x) => (
          <Card key={x.id} className="game-card">
            <CardActionArea>
              <CardMedia className='game-card-media'
              image={x.image} title={x.name} />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {x.name}
                </Typography>
                <Typography variant='body2' color="textSecondary" component='p' >
                  {x.description}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'
                className='game-rating'>
                  <strong>Rating: </strong> {formatRating(x.rating)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
