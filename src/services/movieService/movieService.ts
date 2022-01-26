import axios from "axios";

export const getMovies = (page: number) => {
  console.log("página a ser enviada pra API", page);
  return axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=" +
        process.env.REACT_APP_API_KEY +
        "&language=en-US&page=" +
        page
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log("Um erro ocorreu na requisição: ", error));
};
