import "../styles/globals.css";
import type { AppProps } from "next/app";

const snarkjs = require("snarkjs");

console.log(snarkjs.zKey.contribute);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
