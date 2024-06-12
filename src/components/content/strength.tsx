import { Text, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";

import ContentsContainer from "../ContentsContainer";
import H2 from "../h2";
import H3 from "../h3";

const Strength: React.FC = () => {
  return (
    <ContentsContainer>
      <H2 id="strength">強み</H2>
      <H3>Webアプリケーション開発であれば、一通り触れます</H3>
      <UnorderedList spacing={3}>
        <ListItem>
          <Text>
            サーバーサイドでは、新卒で入社してからPHP、Go、自己研鑽とCode for
            JapanにてTypeScript、副業でJavaを使ってきました。
          </Text>
          <UnorderedList pl={4} mt={1}>
            <ListItem>
              PHPはPHP7技術者認定初級試験の資格も持っています。
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Text>
            フロントエンドでは、会社でHTML、CSS、Bootstrap、React、Next.js、自己研鑽とCode
            for JapanでVue.jsとNuxt.jsを使ってきました。
          </Text>
        </ListItem>
        <ListItem>
          <Text>インフラは主にAWSを使ってきました。</Text>
          <UnorderedList pl={4} mt={1}>
            <ListItem>
              AWS Certified Solutions Architect -
              Associateの資格を持っています。
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
      <H3>テキストコミュニケーションも対面のコミュニケーションも得意です</H3>
      <UnorderedList spacing={3}>
        <ListItem>
          <Text>
            性格上、あまり人見知りをしないことから、初対面の人ともすぐに仲良くなったりします。
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            社会人1年目は、社内エンゲージメントの低さに疑問を感じ、社外で様々な企業の方に、社内コミュニケーションの秘訣を聞いて実践したところ、その取り組みを評価して頂き、新人賞を頂きました。
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            2年目から部署内の勉強会を活発化させ、他部署もゲストとして巻き込んでいくことで、組織のコミュニケーション基盤の構築に寄与しました。その結果、「社内の遊撃手として動き回ってほしい」と期待して頂き、社内の技術方針の決定などを行う部署に最年少で異動しました。
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            POS+では、エンジニア業務の他に採用にも関わり、カジュアル面談などを担当しております。
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            グラファーでは1年目からカジュアル面談を担当し、1次面接へのアトラクトを80%成功させました。
          </Text>
        </ListItem>
      </UnorderedList>
      <H3>人前で話すことが好きです</H3>
      <UnorderedList spacing={3}>
        <ListItem>
          <Text>
            テック企業のCxOが、カンファレンスで堂々と発表する姿に憧れがあり、小規模イベントから登壇の機会を増やした結果、人前で話すことが好きになりました。
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            よくCivicTechの文脈で登壇します。今後は技術系カンファレンスの登壇数を増やすことが目標です。
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            2021年12月には、知り合いの大学教授に招待して頂き、90分の授業を任せていただきました。
          </Text>
        </ListItem>
      </UnorderedList>
    </ContentsContainer>
  );
};

export default Strength;
