import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
const FORMSPARK_FORM_ID = "GvHjf2rm";

const Contact = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name, email, message });
    alert("Form submitted");
  };
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
          <form
            method="post"
            action="https://submit-form.com/GvHjf2rm"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="_feedback.dark" value="true" />
            <input
              type="hidden"
              name="_feedback.success.message"
              value="Go back"
            />
            <div className="fields">
              <div className="field half">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="field half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  disabled={submitting}
                />
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
