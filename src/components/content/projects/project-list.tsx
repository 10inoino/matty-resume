import { Table, Thead, Tbody, Tr, Th, Td, Link, Text } from "@chakra-ui/react";
import React from "react";

import ContentsContainer from "../../ContentsContainer";
import H2 from "../../h2";

import { Project } from "./project";

const json = require("./projects.json") as Array<Project>;

const ProjectList = () => {
  return (
    <ContentsContainer>
      <H2 id="projects">Projects</H2>
      <Text mb={4}>プロジェクト名をクリックすると、詳細が見れます。</Text>
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
          {json.map((project) => (
            <Tr key={project.id}>
              <Td>
                <Link href={`/detail/${project.id}`}>{project.name}</Link>
              </Td>
              <Td>{project.organization}</Td>
              <Td>{project.period}</Td>
              <Td>{project.role}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </ContentsContainer>
  );
};

export default ProjectList;
