import { PortableText } from "../lib/sanity";

const About = ({ profile }) => {
  return (
    <section className="wrapper style2 special" id="about">
      <div className="inner">
        <header>
          <h2>About Me</h2>
          <PortableText blocks={profile.bio} />
        </header>
        <div className="container">
          <div id="skills" className="row">
            <div className="col-1"></div>
            <div className="col-md-auto col-12-medium">
              <h3>Software Development</h3>
              <ul>
                <li>Embedded C, Python, C++.</li>
                <li>HTML, CSS, Javascript.</li>
              </ul>
            </div>
            <div className="col-md-auto col-12-medium">
              <h3>Embedded Systems</h3>
              <ul>
                <li>STM Microcontrollers</li>
                <li>Bare Metal Drivers.</li>
                <li>Arduino</li>
              </ul>
            </div>

            <div className="col-md-auto col-12-medium">
              <h3>CAD/Design</h3>
              <ul>
                <li>Autodesk Fusion 360</li>
                <li>CATIA</li>
                <li>KiCad</li>
              </ul>
            </div>
            <div className="col-md-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
