import React from "react";
import { Box, Heading, UnorderedList, ListItem, Link } from "@chakra-ui/react";

const Hobbies: React.FC = () => {
  return (
    <Box my={5}>
      <Heading as="h2" size="lg" mb={3}>
        趣味
      </Heading>
      <UnorderedList spacing={3}>
        <ListItem>
          プログラミング
          <UnorderedList pl={4}>
            <ListItem>
              技術系同人誌を買って、ちょっとしたWebアプリを作ったりしています。
            </ListItem>
            <ListItem>最近はC++で競技プログラミングも始めました。</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          バスケ
          <UnorderedList pl={4}>
            <ListItem>コロナになってから、全然できていません…</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          筋トレ
          <UnorderedList pl={4}>
            <ListItem>
              家から徒歩2分のところにエニタイムフィットネスがあるので、ほぼ毎日ジムに行くようにしています。
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          ゲーム
          <UnorderedList pl={4}>
            <ListItem>FPSとか、スマブラとかよくやってます。</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          読書
          <UnorderedList pl={4}>
            <ListItem>
              最近は技術書とかビジネス書に寄りがちなので、もっといろんなジャンルに手を出したいです。
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          料理
          <UnorderedList pl={4}>
            <ListItem>
              1ヶ月に1個は作れるレパートリーを増やそうと挑戦中です。
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          映画
          <UnorderedList pl={4}>
            <ListItem>好きな映画は「イミテーション・ゲーム」です。</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          スニーカー収集
          <UnorderedList pl={4}>
            <ListItem>
              今となっては落ち着きましたが、高校の時にNIKEのスニーカーにドハマリし、大学の時は始発で渋谷に行って、スニーカーの抽選に並んでいました。
            </ListItem>
            <ListItem>家に40足スニーカーがあります。</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Podcast
          <UnorderedList pl={4}>
            <ListItem>
              リスナーとしても好きですし、自分でも
              <Link
                href="https://open.spotify.com/show/7gMXEfaXAaQjUbqRWy7UrL"
                isExternal
              >
                in-box.fm
              </Link>
              というPodcastをやっています。
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Hobbies;
