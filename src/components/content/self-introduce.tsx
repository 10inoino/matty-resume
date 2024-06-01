import React from "react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import Container from "../container";
import H2 from "../h2";

const SelfIntroduce = () => {
  return (
    <Container>
      <H2>自己紹介</H2>
      <UnorderedList>
        <ListItem>名前：猪股 光(イノマタ ヒカル)</ListItem>
        <ListItem>生年月日：1996/09/06</ListItem>
        <ListItem>ニックネーム：matty(マティと読みます)</ListItem>
      </UnorderedList>
    </Container>
  );
};

export default SelfIntroduce;
