import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { MovieList } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";
import { actions } from "../actions";
import { State } from "../types";

/**
 * Call GET /movies and dispatch response
 */
export const useLoadMovies = () => {
  const { dispatch } = useGlobalState();
  try{
    useEffect(() => {
      axios
        .get("/movies")
        .then((res: AxiosResponse<MovieList>) =>
          dispatch(actions.loadMovies(res.data)),
        )
        // TODO: Task 7 - handle errors, implement error action and dispatch it
        .catch((error)=>
          dispatch(actions.goTo(State.error)));
    }, [dispatch]);
  }catch(error){
    console.log("Errore");
  }
};
