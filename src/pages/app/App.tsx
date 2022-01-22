import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Credits from "../../components/credits/Credits";
import MovieContent from "../../components/movieContent/MovieContent";
import { getMovie } from "../../services/movieService/movieService";

export default function App() {
  const isMounted = useRef(true);
  const [movie, setMovie] = useState({
    title: "Title",
    overview: "Overview",
    release_date: "1999",
    url_img: "https://picsum.photos/480/600",
  });

  const onUpdate = async () => {
    const movieReq = await getMovie();

    if (isMounted.current) {
      setMovie({
        title: movieReq["title"],
        overview: movieReq["overview"],
        release_date: movieReq["release_date"],
        url_img:
          "https://image.tmdb.org/t/p/original/" + movieReq["poster_path"],
      });
    }
  };

  const handleFWClick: Function = () => {
    console.log("oi");
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <MainContainer>
      <MovieContent movie={movie} handleFWClick={handleFWClick} />
      <Credits />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: #1c1259;
  max-width: 100vw;
  height: 100vh;
  padding: 0px 100px 0px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
