import { Table, Thead, Tbody, Tr, Th, Td, Text, Link } from "@chakra-ui/react";
import React from "react";

import ContentsContainer from "../../common/ContentsContainer";
import H2 from "../../common/h2";

import { SpeakingEngagement } from "./speaking-engagement";

const SpeakingEngagementData =
  require("@/data/speaking-engagements.json") as Array<SpeakingEngagement>;

const SpeakingEngagemenList: React.FC = () => {
  return (
    <ContentsContainer>
      <H2 id="speaking-engagement">登壇歴</H2>
      <Text mb={4}>タイトルをクリックすると、詳細が見れます。</Text>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>タイトル</Th>
            <Th>年月</Th>
          </Tr>
        </Thead>
        <Tbody>
          {SpeakingEngagementData.map((speakingEngagement) => (
            <Tr key={speakingEngagement.id}>
              <Td>
                <Link href={`/speaking-engagement/${speakingEngagement.id}`}>
                  {speakingEngagement.title}
                </Link>
              </Td>
              <Td>{speakingEngagement.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </ContentsContainer>
  );
};

export default SpeakingEngagemenList;
