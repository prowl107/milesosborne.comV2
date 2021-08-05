import Link from "next/link";
const resumePath = "/Resume.pdf";

const Menu = () => {
  return (
    <div suppressHydrationWarning>
      <header id="header">
        <nav>
          <ul>
            <li>
              <a href="#menu">Menu</a>
            </li>
          </ul>
        </nav>
      </header>

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
            <a
              href={encodeURI(resumePath)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
