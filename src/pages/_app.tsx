import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from '../components/header'

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';
import '../styles/header.module.css';
import "../styles/footer.module.css";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Header />
  <Component {...pageProps} />
  <Footer/>
  </>
  );
}
