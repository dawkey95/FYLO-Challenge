const Header = () => {
  return (
    <>
      <section className="header-section">
        <img src="/images/logo.svg" alt="" className="header-logo" />
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-list-item">
              <a href="#" className="header-nav-list-item-link">
                Features
              </a>
            </li>
            <li className="header-nav-list-item">
              <a href="#" className="header-nav-list-item-link">
                Team
              </a>
            </li>
            <li className="header-nav-list-item">
              <a href="#" className="header-nav-list-item-link">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default Header