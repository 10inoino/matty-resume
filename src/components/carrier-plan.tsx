import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const CarrierPlan: React.FC = () => {
  return (
    <Box my={5}>
      <Heading as="h2" size="lg" mb={3}>
        キャリアプラン
      </Heading>
      <Heading as="h3" size="md" my={3}>
        PdM, エヴァンジェリスト
      </Heading>
      <Text mt={2}>
        プロダクトが好きなので、将来的にはプロダクトに深く関わって意思決定をしていくPdMのようなポジションを目指しています。
      </Text>
      <Text mt={2}>
        また、自分の目標とする方が企業のエヴァンジェリストをやっており、そこに強い憧れもあるので、自分自身がエヴァンジャライズしたいプロダクトに出会えた時には、是非そのようなキャリアにも挑戦してみたいと思っています。
      </Text>
      <Heading as="h3" size="md" my={3}>
        ITの蛇口化
      </Heading>
      <Text mt={2}>蛇口を見れば、万人が「捻れば水が出る」と理解できます。</Text>
      <Text mt={2}>
        そのようにソフトウェアでも、説明無しに利用できるUIから、ITの恩恵を受けられるようなソフトウェアを作っていきたいと思っています。
      </Text>
      <Text mt={2}>
        そのためにはソフトウェアの知識のみならず、ユーザー側の深いドメイン知識も必要になるので、積極的に足で情報を取りに行くというスタイルを取っています。
      </Text>
    </Box>
  );
};

export default CarrierPlan;
