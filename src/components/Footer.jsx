const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <img className="footer-logo" src="/images/logo.svg" alt="" />
        <div className="footer-container">
          <div className="footer-contact-details">
            <div className="footer-contact-address">
              <img
                className="address-icon"
                src="/images/icon-location.svg"
                alt=""
              />
              <p className="address-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>

            <div className="footer-contact-phone">
              <img className="phone-icon" src="/images/icon-phone.svg" alt="" />
              <p className="phone-text">+1-543-123-4567</p>
            </div>

            <div className="footer-contact-email">
              <img className="email-icon" src="/images/icon-email.svg" alt="" />
              <p className="email-text">example@fylo.com</p>
            </div>
          </div>

          <div className="group1">
            <span>About Us</span>
            <span>Jobs</span>
            <span>Press</span>
            <span>Blog</span>
          </div>

          <div className="group2">
            <span>Contact Us</span>
            <span>Terms</span>
            <span>Privacy</span>
          </div>

          <div className="social-icons">
            <div className="circle-container">
              <div className="circle-radius">
                <i class="fa-brands fa-facebook-f" />
              </div>
            </div>

            <div className="circle-container">
              <div className="circle-radius">
                <i class="fa-brands fa-twitter" />
              </div>
            </div>

            <div className="circle-container">
              <div className="circle-radius">
                <i class="fa-brands fa-instagram" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
