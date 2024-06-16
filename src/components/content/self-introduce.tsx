import { HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import ContentsContainer from "../common/ContentsContainer";
import H2 from "../common/h2";

const SelfIntroduce = () => {
  return (
    <ContentsContainer>
      <H2 id="self=introduce">自己紹介</H2>
      <UnorderedList>
        <ListItem>名前：猪股 光(イノマタ ヒカル)</ListItem>
        <ListItem>生年月日：1996/09/06</ListItem>
        <ListItem>ニックネーム：matty(マティと読みます)</ListItem>
      </UnorderedList>
      <HStack spacing="24px" my={3}>
        <Image
          src={"/images/portrait1.jpeg"}
          alt="Nigaoe"
          width={300}
          height={300}
          objectFit="contain"
        />
        <Image
          src={"/images/portrait2.jpeg"}
          alt="Nigaoe"
          width={300}
          height={300}
          objectFit="contain"
        />
        <Image
          src={"/images/nigaoe.png"}
          alt="Nigaoe"
          width={300}
          height={300}
          objectFit="contain"
        />
      </HStack>
    </ContentsContainer>
  );
};

export default SelfIntroduce;
