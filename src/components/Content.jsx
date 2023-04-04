const Content = () => {
  return (
    <>
      <section className="content-section">
        <img
          src="/public/images/illustration-stay-productive.png"
          alt=""
          className="content-img"
        />
        <div className="content-text">
          <h2 className="content-title">Stay productive, wherever you are</h2>
          <p className="content-p">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <br />
          <p className="content-p">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <button className="content-btn">
          <a href="#">See how Fylo works</a>
        </button>
      </section>
    </>
  );
};

export default Content;
