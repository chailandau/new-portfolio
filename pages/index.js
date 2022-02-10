import Head from "next/head";
import Image from "next/image";
import Separator from "../components/Separator";
import FeaturedImage from "../components/FeaturedImage";

export default function Home() {
  return (
    <>
      <FeaturedImage />
      <Separator />
    </>
  );
}
