import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Credits from "../../components/credits/Credits";
import MovieContent from "../../components/movieContent/MovieContent";
import IMoviesProps from "../../interfaces/moviesInterface";
import { getMovies } from "../../services/movieService/movieService";

export default function App() {
  const isMounted = useRef(true);
  const [movieCount, setMovieCount] = useState(0);
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState<IMoviesProps>({
    page: 1,
    results: [
      {
        original_title: "Title",
        overview: "Overview",
        poster_path: "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
        release_date: "10/12/2022",
      },
    ],
    total_pages: 10000,
    total_results: 10000,
  });

  const handleFWClick: Function = () => {
    if (moviesList && moviesList.total_results >= movieCount) {
      setMovieCount((movieCount) => movieCount + 1);
      console.log("Adicionado mais um: ", movieCount);
    }

    if (movieCount === 19 && moviesList.total_pages !== moviesList.page) {
      setMovieCount((movieCount) => (movieCount = 0));
      setPage((page) => page + 1);
      console.log("Aumentado o numero da página: ", page);
    }
  };

  const handleBWClick: Function = () => {
    if (moviesList && movieCount > 0) {
      setMovieCount((movieCount) => movieCount - 1);
      console.log("Retirado mais um: ", movieCount);
    }

    if (movieCount === 0 && page !== 1) {
      setMovieCount((movieCount) => (movieCount = 19));
      setPage((page) => page - 1);
      console.log("Diminuido o numero da página: ", page);
    }
  };

  const onUpdate = async (page: number) => {
    const moviesReq: IMoviesProps = await getMovies(page);

    console.log("moviesREq", moviesReq);

    if (isMounted.current) {
      setMoviesList((prev) => (prev = moviesReq));
      console.log("Lista de filmes: ", moviesList);
    }
  };

  useEffect(() => {
    isMounted.current = true;

    onUpdate(page);
    return () => {
      isMounted.current = false;
    };
  }, [page]);

  return (
    <Site>
      <MainTitle>What's popular today?</MainTitle>
      <MainContainer>
        <MovieContent
          movieCount={movieCount}
          page={moviesList.page}
          total_pages={moviesList.total_pages}
          moviesResults={
            moviesList.results[movieCount !== undefined ? movieCount : 0]
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
