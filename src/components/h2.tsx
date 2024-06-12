import { Heading } from "@chakra-ui/react";
import React from "react";

interface H2Props {
  children: React.ReactNode;
  id?: string;
}

const H2: React.FC<H2Props> = ({ children, id }) => {
  return (
    <Heading as="h2" size="lg" mb={3} id={id}>
      {children}
    </Heading>
  );
};

export default H2;
