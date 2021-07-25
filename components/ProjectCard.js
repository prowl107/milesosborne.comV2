import profilePic from "../public/images/minimal-abstract-background-5k-hi-1920x1080.jpg";
import Link from "next/link";
import Image from "next/image";
import { PortableText, urlFor } from "../lib/sanity";

const ProjectCard = ({name, thumbnail, description}) => {
  return (
    <section className="projectCard">
      <span className="image">
        <Image layout="responsive" src={profilePic} alt="" />
      </span>
      <div className="content">
        <header>
          <h3>{name}</h3>
        </header>
        <p>
        <PortableText blocks = {description}/>
        </p>
        <footer>
          <ul className="actions">
            <li>
              <Link href="/generic">
                <a href="#" className="button">
                  Details
                </a>
              </Link>
            </li>
            <li>
              <a href="#" className="button">
                View on GitHub
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default ProjectCard;
