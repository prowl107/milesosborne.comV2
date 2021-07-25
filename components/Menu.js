import Header from "./Header";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <Header></Header>
      <nav id="menu">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a>About me</a>
            </Link>
          </li>
          <li>
            <Link href="/#featured">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <a href="elements.html">Resume</a>
          </li>
        </ul>
        {/* <ul className="actions stacked">
          <li>
            <a href="#" className="button fit primary">
              Get Started
            </a>
          </li>
          <li>
            <a href="#" className="button fit">
              Log In
            </a>
          </li>
        </ul> */}
      </nav>
    </>
  );
};

export default Menu;
