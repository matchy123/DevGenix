import Link from "next/link";
import { Accordion } from "react-bootstrap";

const Header = ({ header, menus }) => {
  switch (header) {
    case 1:
      return <Header1 menus={menus} />;
    case 2:
      return <Header2 menus={menus} />;
    case 3:
      return <Header3 menus={menus} />;
    case 4:
      return <Header4 menus={menus} />;
    case 5:
      return <Header5 menus={menus} />;

    default:
      return <Header1 menus={menus} />;
  }
};
export default Header;

const Menu = ({ logo = "assets/images/logos/logo.png", menus }) => {
  return (
    <nav className="main-menu navbar-expand-lg">
      <Accordion>
        <div className="navbar-header rpy-10">
          <div className="mobile-logo">
            <Link href="/index1-onepage">
              {/* <img src={logo} alt="Logo" title="Logo" /> */}
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="navbar-collapse"
          className="navbar-collapse clearfix"
        >
            <ul className="navigation clearfix">
            <li>
              <Link href="/">Web Design</Link>
                      </li>
                      <li>
                        <Link href="/index5">Web Development</Link>
                      </li>
            <li>
              <Link href="/index3">SEO</Link>
                      </li>
                      <li>
              <Link href="/index2">AI Automation</Link>
                      </li>
                      <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
            </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};

const Header1 = ({ menus }) => {
  return (
    <header className="main-header header-one white-menu menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container px-xxl-0 bordered-x clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/index1-onepage">
                  DevGenix
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-lg-auto ps-xxl-5 clearfix">
              {/* Main Menu */}
              <Menu menus={menus} />
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link
                href="/project-grid"
                className="theme-btn btn-small"
                data-hover="Start Projects"
              >
                <span>Start Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header2 = ({ menus }) => {
  return (
    <header className="main-header white-menu menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container bordered-bottom clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/index1-onepage">
                  {/* <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  /> */}
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-lg-auto ps-xxl-5 clearfix">
              {/* Main Menu */}
              <Menu menus={menus} />
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link
                href="project-grid"
                className="theme-btn btn-small bgc-secondary"
                data-hover="Get Started"
              >
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header3 = ({ menus }) => {
  return (
    <header className="main-header white-menu menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container bordered-bottom clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/index1-onepage">
                  {/* <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  /> */}
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-lg-auto ps-xxl-5 clearfix">
              {/* Main Menu */}
              <Menu menus={menus} />
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link
                href="project-grid"
                className="theme-btn btn-small bgc-primary color-white"
                data-hover="Get Started"
              >
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header4 = ({ menus }) => {
  return (
    <header className="main-header white-menu">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1290 clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/index1-onepage">
                  {/* <img
                    src="assets/images/logos/logo-black.png"
                    alt="Logo"
                    title="Logo"
                  /> */}
                </Link>
              </div>
            </div>
            <div className="nav-outer me-lg-auto ps-xxl-5 clearfix">
              {/* Main Menu */}
              <Menu logo="assets/images/logos/logo-black.png" menus={menus} />
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link
                href="contact"
                className="theme-btn btn-small style-two me-2 bgc-transparent"
                data-hover="Get A Demo"
              >
                <span>Get A Demo</span>
              </Link>
              <Link
                href="contact"
                className="theme-btn btn-small hover-secondary color-white"
                data-hover="Sign Up Free"
              >
                <span>Sign Up Free</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header5 = ({ menus }) => {
  return (
    <header className="main-header header-one white-menu menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper bordered-bottom bgc-black">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/index1-onepage">
                  {/* <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  /> */}
                </Link>
              </div>
            </div>
            <div className="nav-outer me-lg-auto ps-lg-5 ms-xxl-4 clearfix">
              {/* Main Menu */}
              <Menu menus={menus} />
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns d-lg-flex align-items-center">
              <div className="header-number me-5 d-none d-xl-block">
                <i className="fas fa-phone me-1" />
                <a href="callto:+000(123)889933">+000 (123) 88 99 33</a>
              </div>
              <Link
                href="contact"
                className="theme-btn btn-small color-white"
                data-hover="Let’s Talk"
              >
                <span>Let’s Talk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
