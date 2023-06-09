const Header = () => {
  return (
    <>
      <header className="header-section">
        <img src="/images/logo.svg" alt="logo" className="header-logo" />
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-list-item">
              <a href="#" className="header-features">
                Features
              </a>
            </li>
            <li className="header-nav-list-item">
              <a href="#" className="header-team">
                Team
              </a>
            </li>
            <li className="header-nav-list-item">
              <a href="#" className="header-signin">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
