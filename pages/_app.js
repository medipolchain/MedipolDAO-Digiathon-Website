import "../styles/globals.css";
import "antd/dist/antd.css";
import { Web3Provider } from "../components/web3/providers";

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <Component {...pageProps} />
    </Web3Provider>
  );
}

export default MyApp;
