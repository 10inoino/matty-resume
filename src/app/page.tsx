"use client";
import { Container, Heading } from "@chakra-ui/layout";

import CarrierPlan from "@/components/content/carrier-plan";
import Histories from "@/components/content/histories";
import Hobbies from "@/components/content/hobbies";
import Links from "@/components/content/links";
import Projects from "@/components/content/projects";
import SelfIntroduce from "@/components/content/self-introduce";
import SkillStacks from "@/components/content/skill-stacks";
import SpeakingEngagement from "@/components/content/speaking-engagements";
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
        <Projects />
        <SpeakingEngagement />
        <Strength />
        <CarrierPlan />
        <Hobbies />
      </Container>
    </>
  );
}
