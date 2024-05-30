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

const Projects = () => {
  return (
    <Box my={5}>
      <Heading as="h2" size="lg" mb={3}>
        Projects
      </Heading>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>プロジェクト名</Th>
            <Th>所属</Th>
            <Th>期間</Th>
            <Th>当時の役割</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>退店時、退店後のアンケートの実装</Td>
            <Td>パーソルプロセス＆テクノロジー</Td>
            <Td>2019/07 ~ 2019/09</Td>
            <Td>メンバー、エンジニア</Td>
          </Tr>
          <Tr>
            <Td>POS+ Food管理画面のUI刷新</Td>
            <Td>パーソルプロセス＆テクノロジー</Td>
            <Td>2019/10 ~ 2020/03</Td>
            <Td>メンバー、エンジニア</Td>
          </Tr>
          <Tr>
            <Td>サービス中継APIのリファクタリング</Td>
            <Td>パーソルプロセス＆テクノロジー</Td>
            <Td>2020/04 ~ 2020/06</Td>
            <Td>リーダー兼開発者</Td>
          </Tr>
          <Tr>
            <Td>LIFFによるLINE連携サービスの提案、モック作成</Td>
            <Td>パーソルプロセス＆テクノロジー</Td>
            <Td>2020/07 ~ 2020/09</Td>
            <Td>リーダー兼開発者</Td>
          </Tr>
          <Tr>
            <Td>グランドメニュー機能開発</Td>
            <Td>パーソルプロセス＆テクノロジー</Td>
            <Td>2020/10 ~ 2021/03</Td>
            <Td>メンバー、エンジニア</Td>
          </Tr>
          <Tr>
            <Td>新卒横断プロジェクト プロジェクト推進</Td>
            <Td>パーソルプロセス＆テクノロジー</Td>
            <Td>2020/07 ~ 2021/03</Td>
            <Td>プロジェクトリーダー</Td>
          </Tr>
          <Tr>
            <Td>脆弱性診断・改修</Td>
            <Td>ポスタス株式会社</Td>
            <Td>2021/04 ~ 2021/07</Td>
            <Td>メンバー</Td>
          </Tr>
          <Tr>
            <Td>サービス刷新 ユースケースドキュメント化</Td>
            <Td>ポスタス株式会社</Td>
            <Td>2021/07 ~ 2022/06</Td>
            <Td>メンバー</Td>
          </Tr>
          <Tr>
            <Td>コーポレートサイト刷新</Td>
            <Td>ポスタス株式会社</Td>
            <Td>2021/10 ~ 2021/12</Td>
            <Td>PM兼開発者</Td>
          </Tr>
          <Tr>
            <Td>NPO団体向けコロナウイルス対策サイトの作成</Td>
            <Td>一般社団法人Code for Japan</Td>
            <Td>2020/04 ~ 2022/04</Td>
            <Td>メンバー、開発者</Td>
          </Tr>
          <Tr>
            <Td>
              在宅・福祉施設向けコロナ対策サイトモバイル最適化、Twitterのbot化
            </Td>
            <Td>一般社団法人Code for Japan</Td>
            <Td>2020/06 ~ 2020/10</Td>
            <Td>開発者</Td>
          </Tr>
          <Tr>
            <Td>NPO団体のコミュニケーションにおけるIT導入</Td>
            <Td>一般社団法人Code for Japan</Td>
            <Td>2020/12 ~ 2021/09</Td>
            <Td>メンバー、開発者</Td>
          </Tr>
          <Tr>
            <Td>NPO団体の広報強化プロジェクト</Td>
            <Td>一般社団法人Code for Japan</Td>
            <Td>2021/07 ~ 2021/10</Td>
            <Td>プロジェクトリーダー兼開発者</Td>
          </Tr>
          <Tr>
            <Td>グラファー窓口予約の要件定義・設計・開発・運用</Td>
            <Td>株式会社グラファー</Td>
            <Td>2022/07 ~ 2023/04</Td>
            <Td>Product Developer</Td>
          </Tr>
          <Tr>
            <Td>社内のイベント参加者募集Botの作成</Td>
            <Td>株式会社グラファー</Td>
            <Td>2022/07 ~ 2022/08</Td>
            <Td>Product Developer</Td>
          </Tr>
          <Tr>
            <Td>グラファーアンケートの閉域ネットワーク対応</Td>
            <Td>株式会社グラファー</Td>
            <Td>2023/04 ~ 2023/06</Td>
            <Td>Product Developer</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default Projects;
