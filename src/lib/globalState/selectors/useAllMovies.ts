import { Movie } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";

export interface IRatedMovie extends Movie {
  votes: number;
}

export const useAllMovies = (): IRatedMovie[] => {
  const { state } = useGlobalState();

  const movies :IRatedMovie[] = [];
  const votes = state.votes as number[];

  state.movies.forEach((movie,i)=>
    movies.push({
      id: movie.id,
      title: movie.title,
      author : movie.author,
      year: movie.year,
      votes : votes[i+1]
    }
    )
    )
  console.log(movies);

  return movies;
};
