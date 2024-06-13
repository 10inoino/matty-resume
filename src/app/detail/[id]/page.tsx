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

import { Project } from "@/components/content/projects/project";
import ContentsContainer from "@/components/ContentsContainer";
import H2 from "@/components/h2";
import H3 from "@/components/h3";

export default function DetailPage({ params }: { params: { id: string } }) {
  const projects =
    require("../../../components/content/projects/projects.json") as Array<Project>;
  const [targetProject, setTargetProject] = useState<Project | null>(null);

  useEffect(() => {
    setTargetProject(
      projects.find((project) => project.id === Number(params.id)) || null,
    );
  }, [params.id, projects]);

  if (!targetProject) {
    return (
      <Container maxW="7xl" p="12">
        <Spinner size="xl" />
      </Container>
    );
  }

  return (
    <Container maxW="7xl" p="12">
      <Heading as="h1" size="4xl">
        Project Detail
      </Heading>
      <ContentsContainer>
        <H2>{targetProject.name}</H2>
        <UnorderedList spacing={3} mb={5}>
          <ListItem>
            <Text>組織: {targetProject.organization}</Text>
          </ListItem>
          <ListItem>
            <Text>期間: {targetProject.period}</Text>
          </ListItem>
          <ListItem>
            <Text>当時の役割: {targetProject.role}</Text>
          </ListItem>
          <ListItem>
            <Text>プロジェクト規模: {targetProject.project_size}</Text>
          </ListItem>
        </UnorderedList>
        <H3>業務内容</H3>
        <UnorderedList spacing={3}>
          {targetProject.content.map((content, i) => (
            <ListItem key={i}>
              <Markdown>{content}</Markdown>
            </ListItem>
          ))}
        </UnorderedList>
        <H3>実績・取り組み</H3>
        <p style={{ whiteSpace: "pre-wrap" }}>{targetProject.result}</p>
        <H3>開発環境</H3>
        <UnorderedList spacing={3}>
          {Object.entries(targetProject.dev_environment).map(([key, value]) => (
            <ListItem key={key}>
              <Text>
                {key}: {value}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
        {targetProject.reference.length > 0 && (
          <>
            <H3>参考資料</H3>
            <UnorderedList spacing={3}>
              {targetProject.reference.map((ref, i) => (
                <ListItem key={i}>
                  <Link color="blue.500" href={ref} isExternal>
                    {ref}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </>
        )}
        <ContentsContainer>
          <Link href="/#projects" color="blue.500">
            {"< Back to top"}
          </Link>
        </ContentsContainer>
      </ContentsContainer>
    </Container>
  );
}
