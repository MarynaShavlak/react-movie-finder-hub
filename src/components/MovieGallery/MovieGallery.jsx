import PropTypes from 'prop-types';
import React from 'react';
import { MovieGalleryItem } from 'components/MovieGalleryItem';


import { GalleryItem, GalleryList, StyledLink } from './MovieGallery.styled';


export const MovieGallery = ({ movies, state }) => {
  return (
    <GalleryList>
      {movies.map(movie => (
        <GalleryItem key={movie.id}>
          <StyledLink  to={`/movies/${movie.id}`} state ={state}>
            <MovieGalleryItem movie={movie} />
          </StyledLink>

          
        </GalleryItem>
      ))}
    </GalleryList>
  )
}

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
  state: PropTypes.object,
}