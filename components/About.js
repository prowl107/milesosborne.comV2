import { PortableText } from "../lib/sanity";

const About = ({ profile }) => {
  return (
    <section className="wrapper style2 special" id="about">
      <div className="inner">
        <header>
          <h2>About Me</h2>
          <PortableText className="bio" blocks={profile.bio}/>
          {addLinkAttribute()}
        </header>
        <div className="container">
          <div id="skills" className="row">
            <div className="col-1"></div>
            <div className="col-md-auto col-12-medium">
              <h3>Software Development</h3>
              <ul>
                <li>C, C++, Python</li>
                <li>Embedded C</li>
                <li>HTML, CSS, Javascript.</li>
              </ul>
            </div>
            <div className="col-md-auto col-12-medium">
              <h3>Embedded Systems</h3>
              <ul>
                <li>ST Microcontrollers (STM32)</li>
                <li>SPI, I2C, USB</li>
                <li>Arduino/AVR</li>
              </ul>
            </div>

            <div className="col-md-auto col-12-medium">
              <h3>CAD/Design</h3>
              <ul>
                <li>Autodesk Fusion 360</li>
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

function addLinkAttribute() {
  if (typeof window !== "undefined") {
    $(document).ready(function () {
      const textBlock = document.getElementsByClassName("bio");
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

export default About;
