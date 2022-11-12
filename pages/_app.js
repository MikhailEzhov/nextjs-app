import "../styles/globals.scss";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="white"
        startPosition="0.3"
        stopDelayMs="200"
        height="2"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
