import { useGlobalState } from "../GlobalStateContext";
import { MovieList } from "../../../api/types";
import { useMemo } from "react";

/**
 * Return 2 random movies
 */
export const useRandomMovies = () => {
  const { state } = useGlobalState();

  const movies:MovieList=useMemo(()=>{
  
  let random1 = 0;
  let random2 = 0;
  while(random1 == random2)(
    random1 = Math.floor(Math.random() * state.movies.length),
    random2 = Math.floor(Math.random() * state.movies.length)
  );
  return [state.movies[random1], state.movies[random2]];
  },[state.movies]);
  return movies;
};
