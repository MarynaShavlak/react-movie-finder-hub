import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import { CastList, ListItem, Image, ActorInfo } from './Cast.styled';
import { Notification } from 'components/Notification';
import { ErrorMessage } from 'components/ErrorMessage';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isCastHidden, setIsCastHidden] = useState(true);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  


  useEffect(() => {
    async function fetchMovieCast(movieId) {
      try {
        const cast = await API.getMovieCast(movieId);
        setMovieCast(cast);

        setError(false);
      } catch {
        setError(true);
      }
      finally {
        setIsCastHidden(false);
      }
    }

  fetchMovieCast(movieId)
  }, [movieId]);


  if (!movieCast) {
    return null;
  }


  return (
    <>
        {error && <ErrorMessage>Something went wrong. Please try again</ErrorMessage>}
        {isCastHidden === false  && (movieCast.length > 0
        ? <CastList>
          {(movieCast.map(({ id, profile_path, name, character }) => {
            return (
              <ListItem key={id}>
                <Image
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : 'https://www.reachingoutacrossdurham.co.uk/app/uploads/2021/04/Staff-Profile-Image-Placeholder-01-300x300.png'
                  }
                  alt={name}
                    
                />
                <ActorInfo>
                  <h4>{name}</h4>
                  <p>{character}</p>
                      
                </ActorInfo>
              </ListItem>
            );
          }))}
          </CastList>
        : <Notification>Sorry, but there is no info about cast of this movie.</Notification>
        )}
    </>
  );
};



export default Cast;