import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Credits from "../../components/credits/Credits";
import MovieContent from "../../components/movieContent/MovieContent";
import IMoviesProps from "../../interfaces/moviesInterface";
import { getMovies } from "../../services/movieService/movieService";

export default function App() {
  const isMounted = useRef(true);
  const [movieCount, setMovieCount] = useState(0);
  const [moviePage, setMoviePage] = useState(1);
  const [movies, setMovies] = useState<IMoviesProps>({
    page: 1,
    results: [
      {
        original_title: "Title",
        overview: "Overview",
        poster_path: "https://picsum.photos/480/600",
        release_date: "10/12/2022",
      },
    ],
    total_pages: 10000,
    total_results: 10000,
  });

  const onFirstUpdate = async (page: number) => {
    const moviesReq: IMoviesProps = await getMovies(page);

    if (isMounted.current) {
      setMovies(moviesReq);
    }
    console.log("PRIMEIRO UPDATE: ", movieCount);
    console.log("PRIMEIRO MOVIES: ", movies);
  };

  const onUpdate = async (page: number) => {
    const moviesReq: IMoviesProps = await getMovies(page);

    setMovies(moviesReq);

    console.log("UPDATE: ", movieCount);
    console.log("MOVIES: ", movies);
  };

  const handleFWClick: Function = () => {
    if (movieCount >= 0) {
      setMovieCount(movieCount + 1);
    }
    console.log("AUMENTANDO: ", movieCount);
  };

  const handleBWClick: Function = () => {
    if (movieCount >= -1) {
      setMovieCount(movieCount - 1);
    }
    console.log("DIMINUINDO: ", movieCount);
  };

  useEffect(() => {
    onFirstUpdate(moviePage);

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (movieCount === 20) {
      console.log("entrou proxima pagina");
      setMoviePage(moviePage + 1);
      setMovieCount(0);
      onUpdate(moviePage);
    } else if (movieCount < 0 && moviePage > 1) {
      console.log("entrou pagina anterior");
      setMoviePage(moviePage - 1);
      setMovieCount(19);
      onUpdate(moviePage);
    }
  }, [movieCount]);

  return (
    <Site>
      <MainTitle>What's popular today?</MainTitle>
      <MainContainer>
        <MovieContent
          movieCount={movieCount}
          page={movies.page}
          total_pages={movies.total_pages}
          moviesResults={
            movies.results[movieCount >= 0 && movieCount <= 19 ? movieCount : 0]
          }
          handleFWClick={handleFWClick}
          handleBWClick={handleBWClick}
        />
        <Credits />
      </MainContainer>
    </Site>
  );
}

const Site = styled.div`
  background-color: #1c1259;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  height: 100vh;
  padding: 0px 100px 0px;
  align-items: center;
`;

const MainContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.h1`
  margin: 0 0 15px 0;
  font-size: 6rem;
  color: #ffff;
`;
