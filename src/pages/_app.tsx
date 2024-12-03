

import Header from '../components/header';
import Footer from "../components/footer";
import Body from "../components/body";
import About from "../components/about";
import AllProducts from "../components/allProducts";
import WiresAbout from "../components/wiresAbout";
import BrandsSection from '../components/brands';


import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';
import '../styles/header.module.css';
import "../styles/footer.module.css";
import "../styles/body.module.css";
import "../styles/about.module.css";
import "../styles/allproducts.module.css";
import "../styles/wiresabout.module.css";
import "../styles/brands.module.css";



export default function App() {
  return (
  <>
  <Header />
  <Body/>
  <About/>
  <AllProducts/>
  <WiresAbout/>
  <BrandsSection/>
  <Footer/>
  </>
  );
}
