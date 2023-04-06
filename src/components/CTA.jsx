const CTA = () => {
  return (
    <>
      <section className="cta-section">
        <img className="cta-img" src="/images/illustration-intro.png" alt="" />
        <h1 className="cta-header">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="cta-details">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <div className="cta-btn-section">
          <button className="cta-btn">
            <a className="btn-text" href="#">
              Get Started
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default CTA;
