"use client";
import CarrierPlan from "@/components/carrier-plan";
import Histories from "@/components/histories";
import Hobbies from "@/components/hobbies";
import Links from "@/components/links";
import Projects from "@/components/projects";
import SelfIntroduce from "@/components/self-introduce";
import SkillStacks from "@/components/skill-stacks";
import SpeakingEngagement from "@/components/speaking-engagements";
import Strength from "@/components/strength";
import { Container, Heading } from "@chakra-ui/layout";

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
