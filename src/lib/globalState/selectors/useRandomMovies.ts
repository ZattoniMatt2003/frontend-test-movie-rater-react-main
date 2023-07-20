import { useMemo } from "react";
import { MovieList } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";

export const useRandomMovies = () => {
  const { state } = useGlobalState();

  /**
   * ! NOTE TASK 2
   * si poteva semplificare il codice utilizzando il metodo sort per riordinare in maniera randomica l'array movies
   * evitando allo stesso tempo di avere due film uguali. Una volta ordinati in maniera csuale con il metodo slice
   * si prendono i primi due film dell'array.
   *
   * const result = useMemo(
   *  () => state.movies.sort(() => (Math.random() > 0.5 ? -1 : 1)).slice(0, 2),
   *  [state.movies],
   * );
   *
   * return result;
   *
   */

  const movies: MovieList = useMemo(() => {
    let random1 = 0;
    let random2 = 0;
    while (random1 == random2)
      (random1 = Math.floor(Math.random() * state.movies.length)),
        (random2 = Math.floor(Math.random() * state.movies.length));
    return [state.movies[random1], state.movies[random2]];
  }, [state.movies]);
  return movies;
};
