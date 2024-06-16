import { Box } from "@chakra-ui/react";

interface ContentsContainerProps {
  children: React.ReactNode;
}

const ContentsContainer: React.FC<ContentsContainerProps> = ({ children }) => {
  return <Box my={5}>{children}</Box>;
};

export default ContentsContainer;
