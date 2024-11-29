import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Header from '../components/header'
import Footer from "@/components/footer";
import Body from "@/components/body";
import About from "@/components/about";
import AllProducts from "@/components/allProducts";
import WiresAbout from "@/components/wiresAbout";


import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';
import '../styles/header.module.css';
import "../styles/footer.module.css";
import "../styles/body.module.css";
import "../styles/about.module.css";
import "../styles/allproducts.module.css";
import "../styles/wiresabout.module.css";


export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Header />
  <Body/>
  <About/>
  <AllProducts/>
  <WiresAbout/>
  <Footer/>
  </>
  );
}
