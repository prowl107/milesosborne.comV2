import Link from "next/link";
import SpotlightCard from "./SpotlightCard";

const Featured = ({ projects }) => {
  return (
    <section className="wrapper style1 special" id="featured">
      <div className="inner">
        <header>
          <h2>Featured Projects</h2>
          <p>Some Things I've Built</p>
        </header>
        {projects.map((item) => (
          <SpotlightCard key={item._id} featureProject={item} />
        ))}
        {addLinkAttribute()}
        <footer>
          <ul className="actions special">
            <li>
              <Link href="/projects">
                <a className="button">View All Projects</a>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

function addLinkAttribute() {
  if (typeof window !== "undefined") {
    $(document).ready(function () {
      const textBlock = document.getElementsByClassName("project-description");
      for (let i = 0; i < textBlock.length; i++) {
        var text = textBlock[i].getElementsByTagName("a");
        for (let j = 0; j < text.length; j++) {
          if (!text[j].hasAttribute("target")) {
            text[j].setAttribute("target", "_blank");
          }
          if (!text[j].hasAttribute("rel")) {
            text[j].setAttribute("rel", "noreferrer");
          }
        }
      }
    });
  }
}

export default Featured;
