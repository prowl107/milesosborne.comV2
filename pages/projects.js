import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/images/49518dd88d00e1fa27c2eb16a0f85b94.jpg";

export default function projects() {
  return (
    <div
      id="wrapper"
      style={{ height: 100 + "vh", backgroundColor: "#1b1c1c" }}
    >
      <section id="main" classNameName="wrapper style1">
        <div className="inner">
          <header className="major">
            <h1>Projects Archive</h1>
            <p>Lorem ipsum dolor sit magna consectetur</p>
          </header>

          <section className="projectCard">
            <span className="image">
              <Image layout="intrinsic" src={profilePic} alt="" />
            </span>
            <div className="content">
              <header>
                <h3>Aliquam veroeros</h3>
              </header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dapibus rutrum facilisis. className aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos magna
                fames ac turpis egestas amet non lorem amet.
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

          <section className="projectCard">
            <span className="image">
              <Image layout="intrinsic" src={profilePic} alt="" />
            </span>
            <div className="content">
              <header>
                <h3>Aliquam veroeros</h3>
              </header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dapibus rutrum facilisis. className aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos magna
                fames ac turpis egestas amet non lorem amet.
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

          <section className="projectCard">
            <span className="image">
              <Image layout="intrinsic" src={profilePic} alt="" />
            </span>
            <div className="content">
              <header>
                <h3>Aliquam veroeros</h3>
              </header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dapibus rutrum facilisis. className aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos magna
                fames ac turpis egestas amet non lorem amet.
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
        </div>
      </section>
    </div>
  );
}
