import Head from "next/head";
import Intro from "../components/Intro";
import About from "../components/About";
import Featured from "../components/Featured";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div id="wrapper">
      <Head>
        <title>Miles Osbone</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <Intro></Intro>
      <About></About>
      <Featured></Featured>
      <Contact></Contact>
    </div>
  );
}
