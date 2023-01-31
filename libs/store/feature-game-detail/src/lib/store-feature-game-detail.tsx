import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { formatRating } from '@nxegghead/store/util-formatters';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// export interface IProps {
//     match: {
//       params: {
//         id: string
//       }
//     }
// }

// type IStoreFeatureGameDetails = (props: IProps) => JSX.Element;

export const StoreFeatureGameDetail = () => {
  const params = useParams();
  const [state, setState] = useState<{
    data: any;
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: {},
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });

    const gameId = params.id;
    fetch(`api/games/${gameId}`)
      .then((x) => x.json())
      .then((res) => {
        setState({
          ...state,
          data: res,
          loadingState: 'success',
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loadingState: 'error',
        });
      });
  }, [params.id]);

  return (
    <div className="container">
      {state.loadingState === 'loading' ? (
        'Loading ...'
      ) : state.loadingState === 'error' ? (
        <div>Error fetching data</div>
      ) : state.data === null ? (
        ''
      ) : (
        <Card>
          <CardActionArea>
            <CardMedia
              className='game-card-media'
              image={state.data.image}
              title={state.data.name}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {state.data.name}
              </Typography>
              <Typography variant='body2' color="textSecondary" component="p" className='game-rating'>
                <strong>Rating:</strong> {formatRating(state.data.rating)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};
