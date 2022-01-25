import IMoviesResults from "./moviesresultinterface";

export default interface IMoviesProps {
  page: number;
  results: Array<IMoviesResults>;
  total_results: number;
  total_pages: number;
}
