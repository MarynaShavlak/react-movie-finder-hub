
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { Movie, MovieTitle,MovieYear, Rate} from "./MovieGalleryItem.styled"


export const MovieGalleryItem =({movie}) => {
  const { poster_path, title, vote_average, release_date} = movie;
  const releaseYear = release_date !== '' ? parseInt(release_date) : null;
  const userScore = Math.round(vote_average * 10);
  return (
    <>
      
        <Movie
            src={poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            :  `https://img.freepik.com/free-vector/coming-soon-shop-announcement-vector_53876-57828.jpg`}
            alt={`Movie ${title} poster`}
        />

      
      <MovieTitle>{title} </MovieTitle>
      {releaseYear && <MovieYear > {releaseYear} </MovieYear>}
      {vote_average !== 0 &&
        <Rate>
          <CircularProgressBar
          className='movie_rating'
          percent={userScore}
          animationOff='true'
          size={60}
          fontSize="28px"
          fontWeight={700}
          fill="white"
          colorCircle='#e6e6e6s'
          linearGradient={["red", "pink"]}
        />
      </Rate>
      }

    </>
    )

}
   MovieGalleryItem.propTypes = {
    movie: PropTypes.shape({
       title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      poster_path:  PropTypes.string,
          
    }).isRequired,
  };