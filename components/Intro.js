import { urlFor } from "../lib/sanity";

const Intro = ({profilePic}) => {
  return (
    <section id="intro" className="wrapper featured style1">
      <div className="inner">
        <span className="image">
        <img src={urlFor(profilePic).url()} />
          {/* <Image layout="intrinsic" src={profilePic} alt="" /> */}
        </span>
        <div className="content">
          <header>
            <h1>Hi, Im Miles</h1>
            <p>
              Embedded software engineer
              <br />
              and sometimes a rocket scientist on the weekend
              <br />
            </p>
          </header>
          <footer>
            <ul className="actions">
              <li>
                <a href="#" className="button big">
                  Get Started
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
