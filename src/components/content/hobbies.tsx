import { UnorderedList, ListItem, Link } from "@chakra-ui/react";
import React from "react";

import Container from "../container";
import H2 from "../h2";
import H3 from "../h3";

const Hobbies: React.FC = () => {
  return (
    <Container>
      <H2>趣味</H2>
      <H3>プログラミング</H3>
      <UnorderedList pl={4}>
        <ListItem>ちょっとしたWebアプリを作ったりしています。</ListItem>
      </UnorderedList>
      <H3>バスケ</H3>
      <UnorderedList pl={4}>
        <ListItem>
          小学2年生の頃からやっています。今は定期的にやってるわけではありませんが、練習に呼ばれれば行きます。
        </ListItem>
      </UnorderedList>
      <H3>ボルダリング</H3>
      <UnorderedList pl={4}>
        <ListItem>
          家の近くにボルダリングジムがあるので、そこに1人で行って登ってます。
        </ListItem>
      </UnorderedList>
      <H3>筋トレ</H3>
      <UnorderedList pl={4}>
        <ListItem>
          家から徒歩2分のところにエニタイムフィットネスがあるので、2日に1回ジムに行くようにしています。
        </ListItem>
      </UnorderedList>
      <H3>ゲーム</H3>
      <UnorderedList pl={4}>
        <ListItem>FPSとか、スマブラとかよくやってます。</ListItem>
      </UnorderedList>
      <H3>読書</H3>
      <UnorderedList pl={4}>
        <ListItem>
          最近は技術書とかビジネス書に寄りがちなので、もっといろんなジャンルに手を出したいです。
        </ListItem>
      </UnorderedList>
      <H3>映画</H3>
      <UnorderedList pl={4}>
        <ListItem>好きな映画は「イミテーション・ゲーム」です。</ListItem>
      </UnorderedList>
      <H3>スニーカー収集</H3>
      <UnorderedList pl={4}>
        <ListItem>
          今となっては落ち着きましたが、高校の時にNIKEのスニーカーにドハマリし、大学の時は始発で渋谷に行って、スニーカーの抽選に並んでいました。
        </ListItem>
        <ListItem>家に40足スニーカーがあります。</ListItem>
      </UnorderedList>
      <H3>Podcast</H3>
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
    </Container>
  );
};

export default Hobbies;
