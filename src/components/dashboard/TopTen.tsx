import { Box, Button, ListItem, OrderedList, Progress } from "@chakra-ui/react";
import React from "react";
import { useGoTo } from "../../lib/globalState/mutations/useGoTo";
import { useTopTenMovies } from "../../lib/globalState/selectors/useTopTenMovies";
import { State } from "../../lib/globalState/types";
import { Title } from "../layout/Title";

export const TopTen: React.FC = () => {
  const movies = useTopTenMovies();
  const goTo = useGoTo();
  /**
   * ! NOTE TASK 6
   *  Il valore della singola barra progress dovrebbe risultare in percentuale sulla base dei voti totali, quindi
   *  se i voti sono due la barra deve essere al 50% su due film.
   *
   * const { state } = useGlobalState();
   * const votes = state.votes;
   *
   * const total = Object.values(votes).reduce((acc, vote) => acc + vote, 0);
   *
   * <Progress value={(movie.votes / total) * 100} ...
   */

  return (
    <Box>
      <Title>Top ten</Title>
      <OrderedList>
        {movies.map((movie, i) => (
          <ListItem key={movie.id} style={{ opacity: 1 - i * 0.1 + 0.1 }}>
            <span style={{ alignItems: "center", display: "flex" }}>
              <Progress
                value={movie.votes}
                max={20}
                size="xs"
                colorScheme="pink"
                width="15%"
              />{" "}
              {movie.title} ({movie.votes} voti)
            </span>
          </ListItem>
        ))}
      </OrderedList>
      <Button onClick={() => goTo(State.vote)} mt={5}>
        Vota di Nuovo
      </Button>
    </Box>
  );
};
