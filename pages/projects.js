import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { sanityClient, urlFor } from "../lib/sanity";

const projectsQuery = '*[_type == "project"] { _id, projectName, slug, description, thumbnail}';

export default function projects({projects}) {
  return (
    <div id="wrapper" style={{ backgroundColor: "#1b1c1c", display: "flex" }}>
      <section id="main" classNameName="wrapper style1">
        <div className="inner">
          <header className="major">
            <h1>Projects Archive</h1>
            <p>Lorem ipsum dolor sit magna consectetur</p>
          </header>
          <div id="projectContainer">
          {
          projects.map((item) => (
            <ProjectCard name={item.projectName} thumbnail={item.thumbnail} description={item.description}/>
          ))}
            </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() { 
  const projects = await sanityClient.fetch(projectsQuery);
  return { props: {projects}};
}