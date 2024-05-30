import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const SpeakingEngagement: React.FC = () => {
  return (
    <Box my={5}>
      <Heading as="h2" size="lg" mb={3}>
        登壇歴
      </Heading>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>タイトル</Th>
            <Th>年月</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              【ITスキル×社会貢献】ソーシャル・テクノロジー・オフィサーとは何ぞや？会
              ＆NPO井戸端会議！
            </Td>
            <Td>2020/07</Td>
          </Tr>
          <Tr>
            <Td>Startup Lab Lagoon 文化祭</Td>
            <Td>2020/08</Td>
          </Tr>
          <Tr>
            <Td>
              【ITスキル×社会貢献】ソーシャル・テクノロジー・オフィサーとは何ぞや？オンライン座談会
            </Td>
            <Td>2020/10</Td>
          </Tr>
          <Tr>
            <Td>CivicTechForum2021</Td>
            <Td>2021/05</Td>
          </Tr>
          <Tr>
            <Td>千葉大学 NPO/NGO論 ゲスト講義</Td>
            <Td>2021/12</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default SpeakingEngagement;
