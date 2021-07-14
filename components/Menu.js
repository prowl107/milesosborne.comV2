import Header from "./Header";

const Menu = () => {
  return (
    <>
      <Header></Header>
      <nav id="menu">
        <h2>Menu</h2>
        <ul class="links">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="generic.html">Ipsum veroeros</a>
          </li>
          <li>
            <a href="generic.html">Tempus etiam</a>
          </li>
          <li>
            <a href="generic.html">Consequat dolor</a>
          </li>
          <li>
            <a href="elements.html">Elements</a>
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
