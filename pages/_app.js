import { Provider } from "react-redux";
import { useStore } from "../store/store";
import "../styles/globals.scss";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <NextNprogress
        color="white"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
