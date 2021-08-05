import ProjectCard from "../components/ProjectCard";
import { sanityClient, urlFor } from "../lib/sanity";

const projectsQuery = `*[_type == "project"] 
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
  _id,
}`;

export default function projects({ projects }) {
  return (
    <div id="wrapper" style={{ backgroundColor: "#1b1c1c", display: "flex" }}>
      <section id="main" className="wrapper style1">
        <div className="projects-list">
          <header className="major">
            <h1>Projects Archive</h1>
            <p>Lorem ipsum dolor sit magna consectetur</p>
          </header>
          <div id="projectContainer">
            {projects.map((item) => (
              <ProjectCard key={item._id} project={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { projects } };
}
