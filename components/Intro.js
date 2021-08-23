import { urlFor } from "../lib/sanity";

const Intro = ({profilePic}) => {
  return (
    <section id="intro" className="wrapper featured style1">
      <div className="inner">
        <span className="image">
        <img src={urlFor(profilePic).url()} />
        </span>
        <div className="content">
          <header>
            <h1>Hi, I'm Miles</h1>
            <p>
              Embedded software engineer
              <br />  and sometimes a rocket scientist on the weekend
              <br />
            </p>
          </header>
          <footer>
            <ul className="actions">
              <li>
                <a href="#contact" className="button big">
                  Contact
                </a>
              </li>
              <li>
                <a href="/Resume.pdf" target="_blank" className="button big">
                  Resume
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Intro;
