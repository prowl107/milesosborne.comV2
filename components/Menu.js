import Header from "./Header";
import Link from "next/link";

const Menu = ({resumeFile}) => {
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
            <a href="">{resumeFile?.resumeTitle}</a>
          {/* <a href={`${resumeFile.resumePath}?dl=`} target="_blank">Resume</a> */}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
