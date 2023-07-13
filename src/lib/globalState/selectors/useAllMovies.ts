import { Movie } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";

interface IRatedMovie extends Movie {
  votes: number;
}

export const useAllMovies = (): IRatedMovie[] => {
  const { state } = useGlobalState();

  // TODO: associate movies with votes
  // state contains movies and votes in separate properties,
  // join them and return an IRatedMovie array

  const movies :IRatedMovie[] = []; 

  state.movies.forEach(movie=>
    movies.push({
      id: movie.id,
      title: movie.title,
      author : movie.author,
      year: movie.year,
      votes : state.votes.id
    }
    )
    )
  console.log(movies);

  return movies;
};
