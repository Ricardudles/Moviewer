import * as React from "react";
import styled from "styled-components";
import {
  ArrowIosBackOutline,
  ArrowIosForwardOutline,
} from "@styled-icons/evaicons-outline";
import { toLocaleDateString } from "../../commons/utils/date";
import IMoviesResults from "../../interfaces/moviesresultinterface";

interface IProps {
  moviesResults: IMoviesResults;
  handleFWClick: Function;
  handleBWClick: Function;
  page: number;
  total_pages: number;
  movieCount: number;
}

function MovieContent(props: IProps) {
  const {
    moviesResults,
    handleFWClick,
    handleBWClick,
    total_pages,
    page,
    movieCount,
  } = props;

  var date = "Indisponível";
  if (
    moviesResults.release_date !== null ||
    moviesResults.release_date !== undefined
  ) {
    date = toLocaleDateString(moviesResults.release_date);
  }

  return (
    <MainSection>
      <ArrowBack
        size={200}
        onClick={() => {
          handleBWClick();
        }}
      />
      <SectionMovie>
        <MovieArticle>
          <MovieText>
            <MovieTitle>{moviesResults.original_title}</MovieTitle>
            <MovieParagraph>{moviesResults.overview}</MovieParagraph>
          </MovieText>
          <footer>
            <MovieDate>{date}</MovieDate>
          </footer>
        </MovieArticle>
        <MoviePoster
          src={
            "https://image.tmdb.org/t/p/original/" + moviesResults.poster_path
          }
          alt="Movie Poster"
        />
      </SectionMovie>
      <ArrowNext size={200} onClick={() => handleFWClick()} />
    </MainSection>
  );
}

export default MovieContent;

const ArrowBack = styled(ArrowIosBackOutline)`
  color: #ffff;
  transition: 0.3s;
  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
`;

const ArrowNext = styled(ArrowIosForwardOutline)`
  color: #ffff;
  transition: 0.3s;
  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SectionMovie = styled.section`
  /* background-color: #100a35; */
  min-width: 880px;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

const MovieArticle = styled.article`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MoviePoster = styled.img`
  margin-left: 50px;
  border-radius: 8px;
  max-width: 500px;
  max-height: 750px;
  width: auto;
  height: auto;
  object-fit: cover;
  transition: 0.3s;
  &:hover {
    -webkit-box-shadow: 7px 7px 24px 6px rgba(0, 0, 0, 0.59);
    box-shadow: 7px 7px 24px 6px rgba(0, 0, 0, 0.59);
    transform: scale(1.1);
  }
`;

const MovieTitle = styled.h1`
  margin: 0px;
  font-size: 3.5rem;
`;

const MovieParagraph = styled.p`
  font-size: 2rem;
`;

const MovieDate = styled.p`
  margin: 0px;
  font-size: 8rem;
`;

const MovieText = styled.div`
  margin-right: 50px;
`;
