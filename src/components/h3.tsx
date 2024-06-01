import React from "react";
import { Heading } from "@chakra-ui/react";

interface H3Props {
  children: React.ReactNode;
}

const H3: React.FC<H3Props> = ({ children }) => {
  return (
    <Heading as="h3" size="md" my={3}>
      {children}
    </Heading>
  );
};

export default H3;
