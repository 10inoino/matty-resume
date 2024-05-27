"use client";
import Histories from "@/components/histories";
import Links from "@/components/links";
import Projects from "@/components/projects";
import SelfIntroduce from "@/components/self-introduce";
import SkillStacks from "@/components/skill-stacks";
import SpeakingEngagement from "@/components/speaking-engagements";
import Strength from "@/components/strength";
import Markdown from "react-markdown";
const markdown = require("/contents/resume.md") as string;

export default function Home() {
  return (
    <>
      <h1>matty resume</h1>
      <Markdown>{markdown}</Markdown>
      <SelfIntroduce />
      <Links />
      <Histories />
      <SkillStacks />
      <Projects />
      <SpeakingEngagement />
      <Strength />
    </>
  );
}
