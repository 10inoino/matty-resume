import { Table, Thead, Tbody, Tr, Th, Td, Link } from "@chakra-ui/react";

import Container from "../container";
import H2 from "../h2";

const Histories = () => {
  return (
    <Container>
      test
      <H2>来歴</H2>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>年月</Th>
            <Th>内容</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1996年</Td>
            <Td>東京都で生まれる</Td>
          </Tr>
          <Tr>
            <Td>1999年</Td>
            <Td>親の方針で、神奈川の葉山町に引っ越す（この頃の記憶は無い）</Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td>中学校までスキップ</Td>
          </Tr>
          <Tr>
            <Td>2009年4月</Td>
            <Td>葉山町立南郷中学校入学</Td>
          </Tr>
          <Tr>
            <Td>2012年3月</Td>
            <Td>葉山町立南郷中学校卒業</Td>
          </Tr>
          <Tr>
            <Td>2012年4月</Td>
            <Td>神奈川県立逗子高校入学</Td>
          </Tr>
          <Tr>
            <Td>2015年3月</Td>
            <Td>神奈川県立逗子高校卒業</Td>
          </Tr>
          <Tr>
            <Td>2015年4月</Td>
            <Td>明治大学 理工学部 機械情報工学科 入学</Td>
          </Tr>
          <Tr>
            <Td>2018年</Td>
            <Td>
              内定が決まったときから
              <Link href="https://www.persol-pt.co.jp/" isExternal>
                パーソルプロセス&テクノロジー株式会社
              </Link>
              の新卒採用でアルバイト
            </Td>
          </Tr>
          <Tr>
            <Td>2019年3月</Td>
            <Td>明治大学 理工学部 機械情報工学科 卒業</Td>
          </Tr>
          <Tr>
            <Td>2019年4月</Td>
            <Td>
              <Link href="https://www.persol-pt.co.jp/" isExternal>
                パーソルプロセス&テクノロジー株式会社
              </Link>
              入社
            </Td>
          </Tr>
          <Tr>
            <Td>2020年4月</Td>
            <Td>
              <Link href="https://www.code4japan.org/" isExternal>
                一般社団法人コード・フォー・ジャパン
              </Link>
              にプロボノとしてジョイン
            </Td>
          </Tr>
          <Tr>
            <Td>2020年7月</Td>
            <Td>千葉県船橋市で一人暮らしを始める</Td>
          </Tr>
          <Tr>
            <Td>2021年4月</Td>
            <Td>
              部署の人化に伴い、
              <Link href="https://www.postas.co.jp/" isExternal>
                ポスタス株式会社
              </Link>
              に転籍
            </Td>
          </Tr>
          <Tr>
            <Td>2022年6月</Td>
            <Td>
              <Link href="https://graffer.jp/" isExternal>
                株式会社グラファー
              </Link>
              に転職。Product Developerとして活動。
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
};

export default Histories;
