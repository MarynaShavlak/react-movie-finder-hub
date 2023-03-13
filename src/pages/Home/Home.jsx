import React from 'react';
import { useState, useEffect } from 'react';
import {useSearchParams, useLocation} from "react-router-dom";
import * as API from 'services/api';
import { MovieGallery } from 'components/MovieGallery';
import { Pagination } from 'components/Pagination';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [isGalleryShown, setIsGalleryShown] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({page: 1});
  const queryValue = searchParams.get("query");
  const pageValue = searchParams.get("page");

  const location = useLocation();

  useEffect(() => {
    async function fetchMovies(page) {
      try {

        const data= await API.getTrendingMovies(page);
        const { results: movies, total_pages } = data;
        setTotalPages(total_pages);
        setMovies(movies);
        setSearchParams({ page: pageValue});

        setError(false);
      } catch {
        setError(true);
      } finally {
        setIsGalleryShown(true);
      }
    };
    fetchMovies(pageValue);
  }, [pageValue, setSearchParams]);


  const onPageChange = e => {
    setSearchParams({ page: e.selected + 1})
  }

  return (
    <main>
      <MovieGallery movies={movies} state={{ from: location }}></MovieGallery>
      {isGalleryShown && movies.length !== 0 && 
        <Pagination totalPages={totalPages} onPageChange={onPageChange}></Pagination>
      }
      
    </main>
    
  );
};

export default Home;