import React from 'react';
import PropTypes from 'prop-types';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import { getMovieDuration } from 'utils/getMovieDuration';
import StarRatings from 'react-star-ratings';

import {
  MovieDetailsCard,
  MovieDetailsWrapper, 
  MoviePoster,
  MovieTitle,
  MovieYear,
  MovieDesc,
  MovieScore,
  MovieGenreList,
  MovieGenre,
} from './MovieCard.styled';

export const MovieCard = ({ movieDetails}) => {
  const { title, vote_average, runtime, vote_count, release_date, poster_path, overview, genres } = movieDetails;

  const userScore = vote_average.toFixed(2);
  const releaseYear = release_date !== '' ? new Date(release_date).getFullYear() : null;
  const likes = Math.round(vote_count * vote_average / 10);
  const dislikes = Math.round(vote_count - likes);


  return (
      <MovieDetailsCard>
          <MoviePoster 
          src={poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            :  `https://img.freepik.com/free-vector/coming-soon-shop-announcement-vector_53876-57828.jpg`}
        alt={`Movie ${title} poster`}
        width='394'
        height='574'
          />
        
        <MovieDetailsWrapper>
          <div className='info'>
          <MovieTitle >{title} </MovieTitle>
          {releaseYear && <MovieYear > ({releaseYear}) </MovieYear>}
          </div>
       
          {vote_average !== 0 
            ? <MovieScore>
                  <StarRatings
                  rating={vote_average}
                  starRatedColor="#fc458e"
                  starDimension="40px"
                  starEmptyColor="#fde7f0"
                  numberOfStars={10}
                  name='rating'
                  starSpacing="2px"
                />
              
                <p>{userScore}</p>
                <ul className='votes'>
                <li >
                <span>{renderIcons('dislike', iconSize.sm)}</span>
                <span>{dislikes}</span>
              </li>
              <li >
                <span>{renderIcons('like', iconSize.sm)}</span>
                <span>{ likes}</span>
              </li>
              </ul>
              
            </MovieScore>
            : <p>There are no details about movie rating</p>  
          }
        
          <div>
            <MovieDesc>Overview</MovieDesc>
          {overview
            ? <p >{overview}</p>
            : <p>There are no details about movie genres</p>
          }
            
        </div>

        <div>
          <MovieDesc>Duration</MovieDesc>
          {runtime
          ? <span >{getMovieDuration(runtime)}</span>
          : <p>There are is no info about movie runtime</p>
          }
          </div>
           <div>
            <MovieDesc>Genres</MovieDesc>
            {genres?.length > 0 
            ? <MovieGenreList>
              {genres.map(({ id, name }) => (
                <li key={id}><MovieGenre>{name}</MovieGenre></li>
              ))}
              </MovieGenreList>
            :  <p>There are no details about movie genres</p>       
            }
          </div>
        </MovieDetailsWrapper>
      </MovieDetailsCard>
  )

}


MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    runtime: PropTypes.number,
    vote_count: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    // poster_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }
  ).isRequired,
}  