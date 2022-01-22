import axios from "axios";

export const getMovie = () => {
  return axios
    .get(
      "https://api.themoviedb.org/3/movie/802?api_key=" +
        process.env.REACT_APP_API_KEY
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log("Um erro ocorreu na requisição: ", error));
};
