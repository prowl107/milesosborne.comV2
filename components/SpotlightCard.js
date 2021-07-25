import Link from "next/link";
import { PortableText, urlFor } from "../lib/sanity";

const SpotlightCard = ({name, thumbnail, description}) => {
  return (
    <section className="spotlight">
      <span className="image">
        <img src={urlFor(thumbnail).url()}/>
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
              <a href="#" className="button">
                Details
              </a>
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

export default SpotlightCard;
