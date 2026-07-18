function Features() {
  return (
    <section className="features">

      <h2>Why Choose ContactMe?</h2>

      <p className="features-subtitle">
        Everything you need to organize your contacts in one place.
      </p>

      <div className="feature-grid">

        <div className="feature-card">
          <div className="icon">⚡</div>
          <h3>Fast</h3>
          <p>
            Search and manage thousands of contacts instantly.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🔒</div>
          <h3>Secure</h3>
          <p>
            Your information stays safe and protected.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">☁️</div>
          <h3>Cloud Sync</h3>
          <p>
            Access your contacts anywhere on any device.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;