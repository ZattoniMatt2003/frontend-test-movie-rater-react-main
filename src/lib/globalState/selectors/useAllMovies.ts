import { Movie } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";

export interface IRatedMovie extends Movie {
  votes: number;
}

export const useAllMovies = (): IRatedMovie[] => {
  const { state } = useGlobalState();

  /**
   * ! NOTE TASK 1
   * si poteva utilizzare il metodo map per ciclare l'array di movies e aggiungere la proprietà votes
   * sfruttando il relativo id per identivicare i voti corrispondenti, utilizzando successivamente
   * lo spread operator per semplificare ancora di più la sintassi
   *
   * const movies = state.movies.map((movie) => ({
   *   ...movie,
   *   votes: state.votes[movie.id] || 0,
   * }));
   *
   * return movies;
   *
   */

  const movies: IRatedMovie[] = [];
  const votes = state.votes as number[];

  state.movies.forEach((movie, i) =>
    movies.push({
      id: movie.id,
      title: movie.title,
      author: movie.author,
      year: movie.year,
      votes: votes[i + 1] ?? 0,
    })
  );

  return movies;
};
