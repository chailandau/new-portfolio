import Head from "next/head";
import Image from "next/image";
import Separator from "../components/Separator";
import Intro from "../components/Intro";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <>
      <Intro />
      <Separator />
      <Tools />
    </>
  );
}
