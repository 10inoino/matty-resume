import { Box } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Box my={5}>{children}</Box>;
};

export default Container;
