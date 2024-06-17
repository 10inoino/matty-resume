"use client";
import {
  Container,
  Heading,
  ListItem,
  UnorderedList,
  Text,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

import ContentsContainer from "@/components/common/ContentsContainer";
import H2 from "@/components/common/h2";
import H3 from "@/components/common/h3";
import { SpeakingEngagement } from "@/components/content/speaking-engagement/speaking-engagement";

export default function DetailPage({ params }: { params: { id: string } }) {
  const SpeakingEngagementData =
    require("@/data/speaking-engagements.json") as Array<SpeakingEngagement>;

  const [targetEngagements, setTargetEngagements] =
    useState<SpeakingEngagement | null>(null);

  useEffect(() => {
    setTargetEngagements(
      SpeakingEngagementData.find(
        (engagement) => engagement.id === Number(params.id),
      ) || null,
    );
  }, [params.id, SpeakingEngagementData]);

  if (!targetEngagements) {
    return (
      <Container maxW="7xl" p="12">
        <Spinner size="xl" />
      </Container>
    );
  }

  return (
    <Container maxW="7xl" p="12">
      <Heading as="h1" size="4xl">
        Speaking Engagement Detail
      </Heading>
      <ContentsContainer>
        <H2>{targetEngagements.title}</H2>
        <UnorderedList spacing={3} mb={5}>
          <ListItem>
            <Text>年月: {targetEngagements.date}</Text>
          </ListItem>
        </UnorderedList>
        <H3>内容</H3>
        <Markdown>{targetEngagements.content}</Markdown>
        <H3>参考資料</H3>
        <UnorderedList spacing={3}>
          {Object.entries(targetEngagements.reference).map(([key, value]) => (
            <ListItem key={key}>
              <Link color="blue.500" href={value} isExternal>
                {key}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <ContentsContainer>
          <Link href="/#speaking-engagement" color="blue.500">
            {"< Back to top"}
          </Link>
        </ContentsContainer>
      </ContentsContainer>
    </Container>
  );
}
