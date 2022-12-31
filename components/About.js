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
                <li>Embedded C</li>
                <li>Verilog</li>
                <li>C/C++</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="col-md-auto col-12-medium">
              <h3>Embedded Systems</h3>
              <ul>
                <li>VxWorks RTOS</li>
                <li>SPI, I2C, UART, USB</li>
                <li>ARM assembly</li>
              </ul>
            </div>

            <div className="col-md-auto col-12-medium">
              <h3>Platforms</h3>
              <ul>
                <li>ST Microcontrollers (STM32)</li>
                <li>AVR/Arduino</li>
                <li>ARM</li>
                <li>NXP</li>
                <li>Artix-7 FPGA</li>
              </ul>
            </div>
            <div className="col-md-auto"></div>
          </div>

          <div id="skills" className="row">
            <div className="col-1"></div>
            <div className="col-md-auto col-12-medium">
              <h3>Web Development</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>

            <div className="col-md-auto col-12-medium">
              <h3>CAD/Design</h3>
              <ul>
                <li>Autodesk Fusion 360</li>
                <li>KiCad</li>
              </ul>
            </div>

            <div className="col-md-auto col-12-medium">
              <h3>Research Interests</h3>
              <ul>
                <li>Embedded systems/software</li>
                <li>Real-time systems</li>
                <li>Software engineering practices</li>
                <li>Computer architecture</li>
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
