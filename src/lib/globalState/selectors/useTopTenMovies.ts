import { useAllMovies, IRatedMovie } from "./useAllMovies";

export const useTopTenMovies = () => {
  const movies = useAllMovies();
  const moviereturn:IRatedMovie[] =[];
  let max =0;
  let movieR ;
  for(let i=0;i<10;i++){
    movies.forEach(movie=>{
      if((movie.votes > max) && (!moviereturn.includes(movie))){
        max = movie.votes
        movieR = movie
      }
    })
    if(max == 0){
      let it = 0;
      while(moviereturn.length<10){
        if(!moviereturn.includes(movies[it])){
          moviereturn.push(movies[it]);
        }
        it++;
      }
      i=10;
    }else{
      max = 0
      moviereturn.push(movieR)
      movieR=""
    }
  }
  return moviereturn;
};
