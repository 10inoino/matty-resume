import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import React from "react";

import Container from "../../container";
import H2 from "../../h2";

import { Project } from "./project";

const json = require("./projects.json") as Array<Project>;

const ProjectList = () => {
  return (
    <Container>
      <H2>Projects</H2>
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
              <Td>{project.name}</Td>
              <Td>{project.organization}</Td>
              <Td>{project.period}</Td>
              <Td>{project.role}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ProjectList;
