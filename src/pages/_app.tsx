import { ChakraProvider } from "@chakra-ui/react"
import {AppProps} from "next/app";

import Header from '../components/header';
import Footer from "../components/Footer";

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';


export default function App({ Component, pageProps }:AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
      <Footer/>
  </ChakraProvider>

  );
}
