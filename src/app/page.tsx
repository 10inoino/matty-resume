"use client";
import SelfIntroduce from "@/components/self-introduce";
import Markdown from "react-markdown";
const markdown = require("/contents/resume.md") as string;

export default function Home() {
  return (
    <>
      <h1>matty resume</h1>
      <Markdown>{markdown}</Markdown>
      <SelfIntroduce />
    </>
  );
}
