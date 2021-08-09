import Head from "next/head";
import Intro from "../components/Intro";
import About from "../components/About";
import Featured from "../components/Featured";
import Contact from "../components/Contact";
import { sanityClient, urlFor } from "../lib/sanity";

const profileQuery = `*[_type == "profile"] | order(_updatedAt desc) [0]`;
const featuredQuery = `*[_type == "project" && featured == true] 
{
  projectName,
  slug, 
  description,
  thumbnail,
  sourceURL,
  documentationURL->{
    slug
  },
  documentationRef,
  _id
}`;

export default function Home({ profile, featuredProjects }) {
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
      <Intro profilePic={profile.picture}></Intro>
      <About profile={profile}></About>
      <Featured projects={featuredProjects}></Featured>
      <Contact></Contact>
    </div>
  );
}

export async function getStaticProps() {
  const profile = await sanityClient.fetch(profileQuery);
  const featuredProjects = await sanityClient.fetch(featuredQuery);
  return { props: { profile, featuredProjects } };
}
