import Link from "next/link";
import { PortableText, urlFor } from "../lib/sanity";

const SpotlightCard = ({featureProject}) => {
  return (
    <section className="spotlight">
      <span className="image">
        <img src={urlFor(featureProject.thumbnail).url()} />
      </span>
      <div className="content">
        <header>
          <h3>{featureProject.projectName}</h3>
        </header>
          <PortableText className="project-description" blocks={featureProject.description} />
        <footer>
          <ul className="actions">
            {listDetails({ featureProject })}
            {listSourceButton({ featureProject })}
          </ul>
        </footer>
      </div>
    </section>
  );
};

function listDetails({ featureProject }) {
  if (featureProject.documentationURL != null) {
    return (
      <li>
        <a href={featureProject.documentationURL} className="button" target="_blank">
          Details
        </a>
      </li>
    );
  } else if (featureProject.documentationRef != null) {
    return (
      <li>
        <Link href={`/docs/${featureProject.slug.current}`}>
          <a href="" className="button">
            Details
          </a>
        </Link>
      </li>
    );
  }
}

function listSourceButton({ featureProject }) {
  if (featureProject.sourceURL != null) {
    return (
      <li>
        <a href={featureProject.sourceURL} className="button" target="_blank">
          View on GitHub
        </a>
      </li>
    );
  }
}

export default SpotlightCard;
