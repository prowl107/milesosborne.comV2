import Icon from "./Icon";

const Contact = () => {
  return (
    <section id="contact" className="wrapper split style2">
      <div className="inner">
        <section>
          <header>
            <h3>Contact</h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. className aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos magna fames ac
            turpis egestas amet non lorem amet.
          </p>
          <ul className="icons">
            <li>
              <a href="#" className="icon brands fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon solid fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <form method="post" action="#">
            <div className="fields">
              <div className="field half">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="field half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="field">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </section>
      </div>
      {/* <div className="copyright">
        <p>
          &copy; Untitled. All rights reserved. Lorem ipsum dolor sit amet
          nullam.
        </p>
      </div> */}
    </section>
  );
};

export default Contact;
