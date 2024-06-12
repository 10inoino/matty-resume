import { ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

import ContentsContainer from "../ContentsContainer";
import H2 from "../h2";

const SelfIntroduce = () => {
  return (
    <ContentsContainer>
      <H2 id="self=introduce">自己紹介</H2>
      <UnorderedList>
        <ListItem>名前：猪股 光(イノマタ ヒカル)</ListItem>
        <ListItem>生年月日：1996/09/06</ListItem>
        <ListItem>ニックネーム：matty(マティと読みます)</ListItem>
      </UnorderedList>
    </ContentsContainer>
  );
};

export default SelfIntroduce;
