"use client";
import { useEffect, useState } from "react";

import Container from "@/components/container";
import { Project } from "@/components/content/projects/project";

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
      <Container>
        <p>Not found</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>{targetProject.name}</h1>
      <p>{targetProject.organization}</p>
      <p>{targetProject.period}</p>
      <p>{targetProject.role}</p>
      <p>{targetProject.result}</p>
      <p>{targetProject.project_size}</p>
      <p>{targetProject.reference}</p>
    </Container>
  );
}
