import { IRatedMovie, useAllMovies } from "./useAllMovies";

export const useTopTenMovies = () => {
  const movies = useAllMovies();

  /**
   * ! NOTE TASK 3
   * si poteva semplificare di molto il codice sfruttando metodi come sort e slice, più moderni e performanti.
   * Il metodo sort confronta i vari valori tra di loro e restituendo un valore negativo, zero o positivo a
   * seconda del risultato della comparazione. In questo caso, viene confrontato il numero di voti dei film
   * Per semplificare ancora di piu la funzione si può ritornare direattamente il risultato.
   *
   * return movies.sort((a, b) => (a.votes > b.votes ? -1 : 1)).slice(0, 10);
   *
   */

  const moviereturn: IRatedMovie[] = [];
  let max = 0;
  let movieR;
  for (let i = 0; i < 10; i++) {
    movies.forEach((movie) => {
      if (movie.votes > max && !moviereturn.includes(movie)) {
        max = movie.votes;
        movieR = movie;
      }
    });
    if (max == 0) {
      let it = 0;
      while (moviereturn.length < 10) {
        if (!moviereturn.includes(movies[it])) {
          moviereturn.push(movies[it]);
        }
        it++;
      }
      i = 10;
    } else {
      max = 0;
      moviereturn.push(movieR);
      movieR = "";
    }
  }
  return moviereturn;
};
