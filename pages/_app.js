import "../styles/style.css";
import "../styles/main.css";
import Menu from "../components/Menu";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu></Menu>
      <Component {...pageProps} />
      <script type="text/javascript" src="/js/jquery.min.js"></script>
      <script type="text/javascript" src="/js/browser.min.js"></script>
      <script type="text/javascript" src="/js/breakpoints.min.js"></script>
      <script type="text/javascript" src="/js/util.js"></script>
      <script type="text/javascript" src="/js/main.js"></script>
    </>
  );
}

export default MyApp;
