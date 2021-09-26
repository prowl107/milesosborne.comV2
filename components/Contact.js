import Form from "./Form";
const Contact = () => {
  return (
    <section id="contact" className="wrapper split style2">
      <div className="inner">
        <section>
          <header>
            <h3>Contact</h3>
          </header>
          <p>Have a question? Just want to say hi? Feel free to reach out!</p>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/milesosborne"
                className="icon brands fa-linkedin"
                target="_blank"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/prowl107"
                className="icon brands fa-github"
                target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="mailto: milesosborne182@gmail.com"
                className="icon solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <Form></Form>
        </section>
      </div>
      <div className="copyright inner">
        <p id="message">Miles Osborne - 2021 | Made with Next.js & Sanity.io</p>
      </div>
    </section>
  );
};

export default Contact;
