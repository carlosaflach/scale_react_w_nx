import {Card, CardActionArea, CardContent, Typography} from '@material-ui/core'
import { useParams } from 'react-router-dom'

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
  return (
    <div className='container'>
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component='p'>
            {params.id}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}
