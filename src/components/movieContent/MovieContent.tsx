import * as React from "react";
import styled from "styled-components";
import {
  ArrowIosBackOutline,
  ArrowIosForwardOutline,
} from "@styled-icons/evaicons-outline";
import MovieProps from "../../interfaces/movieInterface";
import { toLocaleDateString } from "../../commons/utils/date";

interface IProps {
  movie: MovieProps;
  handleFWClick: Function;
}

function MovieContent(props: IProps) {
  const { movie, handleFWClick } = props;

  const date = toLocaleDateString(movie.release_date);

  return (
    <MainSection>
      <ArrowBack size={200} />
      <SectionMovie>
        <MovieArticle>
          <MovieText>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieParagraph>{movie.overview}</MovieParagraph>
          </MovieText>
          <footer>
            <MovieDate>{date}</MovieDate>
          </footer>
        </MovieArticle>
        <MoviePoster src={movie.url_img} alt="Movie Poster" />
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
