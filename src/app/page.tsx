"use client";
import { Container, Heading } from "@chakra-ui/layout";

import CarrierPlan from "@/components/content/carrier-plan";
import Histories from "@/components/content/histories";
import Hobbies from "@/components/content/hobbies";
import Links from "@/components/content/links";
import ProjectList from "@/components/content/projects/project-list";
import SelfIntroduce from "@/components/content/self-introduce";
import SkillStacks from "@/components/content/skill-stacks";
import SpeakingEngagemenList from "@/components/content/speaking-engagement/speaking-engagement-list";
import Strength from "@/components/content/strength";

export default function Home() {
  return (
    <>
      <Container maxW="7xl" p="12">
        <Heading as="h1" size="4xl">
          Resume
        </Heading>
        <SelfIntroduce />
        <Links />
        <Histories />
        <SkillStacks />
        <ProjectList />
        <SpeakingEngagemenList />
        <Strength />
        <CarrierPlan />
        <Hobbies />
      </Container>
    </>
  );
}
