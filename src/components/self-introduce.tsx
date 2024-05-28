import React from "react";
import { Box, Heading, List, ListItem, UnorderedList } from "@chakra-ui/react";

const SelfIntroduce = () => {
  return (
    <Box my={3}>
      <Heading as="h2" size={"lg"}>
        自己紹介
      </Heading>
      <UnorderedList>
        <ListItem>名前：猪股 光(イノマタ ヒカル)</ListItem>
        <ListItem>生年月日：1996/09/06</ListItem>
        <ListItem>ニックネーム：matty(マティと読みます)</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default SelfIntroduce;
