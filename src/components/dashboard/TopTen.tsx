import { Box , ListItem, OrderedList, Button, Progress } from "@chakra-ui/react";
import React from "react";
import { useTopTenMovies } from "../../lib/globalState/selectors/useTopTenMovies";
import { Title } from "../layout/Title";
import { useGoTo } from "../../lib/globalState/mutations/useGoTo";
import { State } from "../../lib/globalState/types";

export const TopTen: React.FC = () => {
  const movies = useTopTenMovies();
  const goTo = useGoTo();

  return (
    <Box>
      <Title>Top ten</Title>
      <OrderedList>
        {movies.map((movie,i) => (
          <ListItem key={movie.id} style={{opacity: 1-(i*0.1)+0.1}}>
            <span style={{alignItems:'center', display:'flex'}} >
            <Progress value={movie.votes} max={20} size='xs' colorScheme="pink" width='15%'/> {movie.title} ({movie.votes} voti)
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
