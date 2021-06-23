import AppHeader from "../Components/Header/AppHeader";
import { Provider } from "react-redux";
import Footer from "../Components/Footer/Footer";
import "../styles/index.css";
import { AppProps } from "next/app";
import store from "../Redux/store";

const App = ({ Component, pageProps, store }: AppProps) => {
  <AppHeader />;
  <Footer />;
  <Provider store={store}>
    return <Component {...pageProps} />;
  </Provider>;
};

export default App;
