import "./index.css";
import Navbar from "./components/Navbar";
import MessageForm from "./components/MessageForm";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="app">
        <section className="hero">
          <div className="hero-text">
            <span className="badge">PRIVATE CONTACT</span>

            <h1>Send Message to OUTIS SFM</h1>

            <p>
              A private place to send me a message.
              <br />
              Only I can read what you write.
            </p>

            <div className="buttons">
              <a href="#message" className="primary">
                Send Message
              </a>

            <a href="#how-it-works" className="secondary">
  How it Works
</a>
            </div>
          </div>

          <div className="hero-image">
            <div className="mockup">
              <div className="phone-top"></div>

              {[
  "Anonymous",
  "Private",
  "Hidden",
  "Visitor",
].map((item) => (
  <div className="card" key={item}>
    <div className="avatar"></div>

    <div className="lines">
      <h4>{item}</h4>
      <p>New message</p>
    </div>
  </div>
))}
            </div>
          </div>
        </section>

        <MessageForm />
        <HowItWorks />
      </main>

      <Footer />
    </>
  );
}

export default App;