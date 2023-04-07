const Content = () => {
  return (
    <>
      <section className="content-section">
        <img
          src="/images/illustration-stay-productive.png"
          alt="people with speech bubbles"
          className="content-img"
        />
        <div className="content-text">
          <h2 className="content-title">Stay productive, wherever you are</h2>
          <p className="content-p">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
            <br />
            <br />
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <br />
          <p className="content-p"></p>
          <div className="btn-container">
            <div className="content-btn">
              <button>See how Fylo works</button>
              <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
