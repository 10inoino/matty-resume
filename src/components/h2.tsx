import React from "react";
import { Heading } from "@chakra-ui/react";

interface H2Props {
  children: React.ReactNode;
}

const H2: React.FC<H2Props> = ({ children }) => {
  return (
    <Heading as="h2" size="lg" mb={3}>
      {children}
    </Heading>
  );
};

export default H2;
