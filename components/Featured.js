import Link from "next/link";
import SpotlightCard from "./SpotlightCard";

const Featured = ({ projects }) => {
  return (
    <section className="wrapper style1 special" id="featured">
      <div className="inner">
        <header>
          <h2>Featured Projects</h2>
          <p>
            Rutrum facilisis. className aptent taciti sociosqu
            <br />
            litora torquent et conubia etiam nostra.
          </p>
        </header>
        {
          projects.map((item) => (
            <SpotlightCard name={item.projectName} thumbnail={item.thumbnail} description={item.description}/>
          ))}
        <footer>
          <ul className="actions special">
            <li>
              <Link href="/projects">
                <a className="button">View the archive</a>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default Featured;
