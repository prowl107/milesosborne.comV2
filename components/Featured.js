import Link from "next/link";
import Image from "next/image"
import profilePic from "../public/images/49518dd88d00e1fa27c2eb16a0f85b94.jpg";

const Featured = () => {
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
        <section className="spotlight">
          <span className="image">
            <Image layout="intrinsic" src={profilePic} alt="" />
          </span>
          <div className="content">
            <header>
              <h3>Aliquam veroeros</h3>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dapibus rutrum facilisis. className aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos magna fames ac
              turpis egestas amet non lorem amet.
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
        <section className="spotlight">
          <span className="image">
          <Image layout="intrinsic" src={profilePic} alt="" />
          </span>
          <div className="content">
            <header>
              <h3>Nostra adpiscing</h3>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dapibus rutrum facilisis. className aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos magna fames ac
              turpis egestas amet non lorem amet.
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
        <section className="spotlight">
          <span className="image">
          <Image layout="intrinsic" src={profilePic} alt="" />
          </span>
          <div className="content">
            <header>
              <h3>Tempus litoria</h3>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dapibus rutrum facilisis. className aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos magna fames ac
              turpis egestas amet non lorem amet.
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
        <footer>
          <ul className="actions special">
            <li>
              <Link href="/projects">
                <a className="button">
                  View the archive
                </a>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default Featured;
