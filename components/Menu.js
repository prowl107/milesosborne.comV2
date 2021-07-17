import Header from "./Header";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <Header></Header>
      <nav id="menu">
        <h2>Menu</h2>
        <ul class="links">
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
            <Link href="/projects">
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
        <ul class="actions stacked">
          <li>
            <a href="#" class="button fit primary">
              Get Started
            </a>
          </li>
          <li>
            <a href="#" class="button fit">
              Log In
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
