import "../styles/style.css";
import "../styles/main.css";
import Menu from "../components/Menu";
import App from "next/app"

const resumeQuery = `*[_type == "resume"] | order(_createdAt desc) [0]{
  "resumePath": resumeFile.asset->url,
  resumeTitle
}`;

function MyApp({ Component, pageProps, resume }) {
  return (
    <>
      <Menu resumeFile={resume}></Menu>
      <Component {...pageProps} />
      <script async type="text/javascript" src="/js/jquery.min.js"></script>
      <script async type="text/javascript" src="/js/browser.min.js"></script>
      <script async type="text/javascript" src="/js/breakpoints.min.js"></script>
      <script async type="text/javascript" src="/js/util.js"></script>
      <script async type="text/javascript" src="/js/main.js"></script>
    </>
  );
}

export async function getInitialProps(context) {
  const resume = await sanityClient.fetch(resumeQuery);
  return { props: { resume } };
}

export default MyApp;
