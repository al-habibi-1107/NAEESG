

import { ChakraProvider,defaultSystem } from "@chakra-ui/react"
import {AppProps} from "next/app";

import Header from '../components/header';
import Footer from "../components/Footer";

import '../styles/globals.css';


export default function App({ Component, pageProps }:AppProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Header />
      <Component {...pageProps} />
      <Footer/>
  </ChakraProvider>

  );
}
