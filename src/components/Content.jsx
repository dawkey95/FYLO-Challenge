const Content = () => {
  return (
    <>
      <section className="content-section">
        <img
          src="/images/illustration-stay-productive.png"
          alt=""
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
            <button className="content-btn">
              <a href="#">See how Fylo works</a>
              <i class="fa-solid fa-circle-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
