import Layout from "@/components/layout";
import "@/styles/globals.css";
import store  from "@/redux-store/index";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
