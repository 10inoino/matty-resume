import { Text } from "@chakra-ui/react";
import React from "react";

import ContentsContainer from "../ContentsContainer";
import H2 from "../h2";
import H3 from "../h3";

const CarrierPlan: React.FC = () => {
  return (
    <ContentsContainer>
      <H2 id="carrier-plan">キャリアプラン</H2>
      <H3>PdM, エヴァンジェリスト</H3>
      <Text mt={2}>
        プロダクトが好きなので、将来的にはプロダクトに深く関わって意思決定をしていくPdMのようなポジションを目指しています。
      </Text>
      <Text mt={2}>
        また、自分の目標とする方が企業のエヴァンジェリストをやっており、そこに強い憧れもあるので、自分自身がエヴァンジャライズしたいプロダクトに出会えた時には、是非そのようなキャリアにも挑戦してみたいと思っています。
      </Text>
      <H3>ITの蛇口化</H3>
      <Text mt={2}>蛇口を見れば、万人が「捻れば水が出る」と理解できます。</Text>
      <Text mt={2}>
        そのようにソフトウェアでも、説明無しに利用できるUIから、ITの恩恵を受けられるようなソフトウェアを作っていきたいと思っています。
      </Text>
      <Text mt={2}>
        そのためにはソフトウェアの知識のみならず、ユーザー側の深いドメイン知識も必要になるので、積極的に足で情報を取りに行くというスタイルを取っています。
      </Text>
    </ContentsContainer>
  );
};

export default CarrierPlan;
