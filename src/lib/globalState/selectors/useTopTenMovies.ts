import { useAllMovies } from "./useAllMovies";

export const useTopTenMovies = () => {
  const movies = useAllMovies();
  
  movies.sort((a,b)=> b.votes-a.votes);

  return movies.slice(0,10);
};
