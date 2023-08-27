import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
const FORMSPARK_FORM_ID = "GvHjf2rm";

const Form = () => {
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
    window.location.href = "https://" + window.location.hostname;
  };

  return (
    <form method="post" action="?" onSubmit={onSubmit}>
      <div className="g-recaptcha" data-sitekey="6Lf0VI8cAAAAAJbK7No-fOO89VP8jaWU6sZcE_a8"></div>
      <input type="hidden" name="_feedback.dark" value="true" />
      <input type="hidden" name="_feedback.success.message" value="Go back" />
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
          <input type="submit" value="Submit" disabled={submitting} />
        </li>
      </ul>
    </form>
  );
};

export default Form;
