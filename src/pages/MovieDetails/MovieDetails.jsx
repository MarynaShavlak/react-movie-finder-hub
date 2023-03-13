import { useState, useEffect, Suspense } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { IconButton } from 'components/IconButton';
import * as API from 'services/api';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';



import {
  Main,
  LinkItem,
  AdditionalInfo,
  LinksList,
} from './MovieDetails.styled';
import { MovieCard } from 'components/MovieCard';




const MovieDetails   = () => {
  const [movieDetails, setMovieDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();


  const location = useLocation();

  useEffect(() => {
    async function fetchMovie(movieId) {
      try {
        setIsLoading(true);
        const movie = await API.getMovieDetails(movieId);
        setMovieDetails(movie);
        setError(false);
        
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
  };
  fetchMovie(movieId);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const backLinkHref = location.state?.from ?? '/';


  return (
    <Main>
      <Link to={backLinkHref} >
        <IconButton aria-label='Back to previous page'>
            {renderIcons('back', iconSize.sm)}
        </IconButton>
      </Link>
      {error && <p>Something went wrong. Please try again</p>}
      <MovieCard movieDetails={movieDetails} />

      <AdditionalInfo>
        <h3>Additional information</h3>
        <LinksList>
          <li>
            <LinkItem to="cast" state={{ from: location.state?.from }}>Cast</LinkItem>
          </li>
          <li>
            <LinkItem to="reviews" state={{ from: location.state?.from }}>Reviews</LinkItem>
          </li>
        </LinksList>
      </AdditionalInfo>
      <Suspense > 
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MovieDetails;