import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function MessageForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_9d7jq4q",
      "template_lugz1l9",
      form.current,
      "2gLa8J0qW7IS4ok5S"
    )
    .then(() => {
  setStatus("success");
  form.current.reset();
})
    
    .catch((error) => {
  console.error(error);
  setStatus("error");
});
}
  return (
    <section id="message" className="message-section">

      <p className="section-tag">
        PRIVATE COMMUNICATION
      </p>

      <h2>Leave a Message</h2>

      <p className="message-subtitle">
        Everything you write stays between you and me.
      </p>

      <form
  ref={form}
  onSubmit={sendEmail}
  className="message-form"
>

        <input
          type="text"
          name="name"
          placeholder="Your Name (optional)"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email (optional)"
        />

        <textarea
        name="message"
          rows="7"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>
      {status === "success" && (
  <div className="success-message">
    ✅ Your message has been sent successfully.
  </div>
)}

{status === "error" && (
  <div className="error-message">
    ❌ Something went wrong. Please try again.
  </div>
)}

      <div className="privacy-note">
        <span>🔒 Encrypted</span>
        <span>•</span>
        <span>Private</span>
        <span>•</span>
        <span>Anonymous</span>
      </div>

    </section>
  );
}

export default MessageForm;