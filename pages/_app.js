import "../styles/style.css";
import "../styles/main.css";
import dynamic from 'next/dynamic'

const Menu = dynamic(() => import("../components/Menu"));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Menu></Menu>
      {/* <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> */}
      <script async type="text/javascript" src="/js/jquery.min.js"></script>
      <script type="text/javascript" src="/js/browser.min.js"></script>
      <script type="text/javascript" src="/js/breakpoints.min.js"></script>
      <script type="text/javascript" src="/js/util.js"></script>
      <script type="text/javascript" src="/js/main.js"></script>
    </>
  );
}

export default MyApp;
