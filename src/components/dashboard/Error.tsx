import { Box } from "@chakra-ui/react";
import { WarningIcon } from '@chakra-ui/icons'
import React from "react";

export const ErrorPage: React.FC = () => {

    return (
      <Box>
        <div style={{textAlign:'center', width:'100%'}}><WarningIcon w={5}h={5}/></div>
        <Box style={{textAlign:'center'}}>Ops, si è verificato un errore</Box>
      </Box>
    );
};
