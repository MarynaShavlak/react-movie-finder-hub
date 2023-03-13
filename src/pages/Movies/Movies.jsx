import React, { useState, useEffect,  useRef } from 'react';
import {useSearchParams,useLocation} from "react-router-dom";
import { SearchFilter, SearchForm, SearchFormButton, SearchFormInput } from './Movies.styled';
import { MovieGallery } from 'components/MovieGallery';
import { Pagination } from 'components/Pagination';

import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import * as API from 'services/api'; 
import * as Notification from 'utils/notifications';

const Movies = () => {
   const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isGalleryShown, setIsGalleryShown] = useState(false);
  const [error, setError] = useState(false);

  
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get("query");
  const pageValue = searchParams.get("page");

  
  const searchInputRef = useRef();
  const location = useLocation();

  useEffect(() => {

    if (!queryValue) return;
    
    async function fetchMoviesByQuery(query, page) {
      try {
        setIsLoading(true);
        const data = await API.getMoviesByQuery(query, page);
        const { results: movies, total_pages, total_results } = data;

        if (movies.length === 0) {
         return Notification.showFailureNotification();
        }
        if (movies.length && pageValue === 1) {
          Notification.showSuccessNotification(total_results);
        }
        setTotalPages(total_pages);
        setSearchedMovies(movies);
        setError(false);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
        setIsGalleryShown(true);
      }
    };

    fetchMoviesByQuery(queryValue, pageValue);
  }, [queryValue, pageValue]);


    const handleSubmit = e => {
    e.preventDefault();
    const movieQuery = searchInputRef.current.value;
    
      if (!movieQuery) {
        setSearchParams({});
        Notification.showWarnNotification();
        return;
      }
      setSearchParams({ query: movieQuery, page: currentPage });
    
  }


  const onPageChange = e => {
    setSearchParams({ query: queryValue, page: e.selected + 1})
  }


  return (
    <main>
      <SearchFilter>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search movie..."
            name="query"
            ref={searchInputRef}
          />          
          <SearchFormButton type='submit' aria-label='Search button'>
            {renderIcons('search', iconSize.sm)}
        </SearchFormButton>
        </SearchForm>
      </SearchFilter>
      <MovieGallery movies={searchedMovies} state={{ from: location }}></MovieGallery>
      {isGalleryShown && searchedMovies.length !== 0 && 
        <Pagination totalPages={totalPages} onPageChange={onPageChange} />
      }


    </main>
  );
};

export default Movies;