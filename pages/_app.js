import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import "../styles/globals.scss";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <NextNprogress
        color="grey"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
