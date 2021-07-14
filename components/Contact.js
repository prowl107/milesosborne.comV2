import Icon from "./Icon";

const Contact = () => {
  return (
    <section id="footer" class="wrapper split style2">
      <div class="inner">
        <section>
          <header>
            <h3>Magna lorem ipsum</h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos magna fames ac
            turpis egestas amet non lorem amet.
          </p>
          <ul class="icons">
            <li>
              <a href="#" class="icon brands fa-linkedin">
                <span class="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands fa-github">
                <span class="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon solid fa-envelope">
                <span class="label">Email</span>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <form method="post" action="#">
            <div class="fields">
              <div class="field half">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div class="field half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="field">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <ul class="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </section>
      </div>
      <div class="copyright">
        <p>
          &copy; Untitled. All rights reserved. Lorem ipsum dolor sit amet
          nullam.
        </p>
      </div>
    </section>
  );
};

export default Contact;
