import Image from "next/image";
import profilePic from "../public/images/49518dd88d00e1fa27c2eb16a0f85b94.jpg";

const Intro = () => {
  return (
    <section id="intro" className="wrapper featured style1">
      <div className="inner">
        <span className="image">
          {/* <img src="/images/geometry-3d-abstract-wide-8k-ep-2560x1080.jpg" alt="" /> */}
          <Image layout="intrinsic" src={profilePic} alt="" />
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
