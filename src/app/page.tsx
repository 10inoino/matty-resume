import Image from "next/image";
import Markdown from "react-markdown";

export default function Home() {
  const markdown = '# Hi, *Pluto*!'
  return (
    <>
      <h1>matty resume</h1>
      <Markdown>{markdown}</Markdown>
    </>
  );
}
