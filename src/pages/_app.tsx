

import { ChakraProvider,defaultSystem } from "@chakra-ui/react"

import Header from '../components/header';
import Footer from "../components/Footer";
import BodySection from '../components/body';
import About from "../components/about";
import AllProducts from "../components/allProducts";
import WiresAbout from "../components/wiresAbout";
import BrandsSection from '../components/brands';
import QuickContactSection from '../components/quickContact';


import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';
import '../styles/header.module.css';
import "../styles/footer.module.css";
import "../styles/body.module.css";
import "../styles/about.module.css";
import "../styles/allproducts.module.css";
import "../styles/wiresabout.module.css";
import "../styles/brands.module.css";
import "../styles/quickContact.module.css";


export default function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Header />
      <BodySection/>
      <About/>
      <AllProducts/>
      <WiresAbout/>
      <BrandsSection/>
      <QuickContactSection/>
      <Footer/>
  </ChakraProvider>

  );
}
