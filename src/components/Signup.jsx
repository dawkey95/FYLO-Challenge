const Signup = () => {
  return (
    <>
      <section className="signup-section">
        <div className="signup-container">
          <h2 className="signup-title">Get early access today</h2>
          <p className="signup-details">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div>
            <input className="signup-input" type="text" placeholder="email@example.com" />
            <button className="signup-btn">Get Started For Free</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
