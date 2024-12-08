

import BodySection from '../components/body';
import About from "../components/about";
import AllProducts from "../components/allProducts";
import WiresAbout from "../components/wiresAbout";
import BrandsSection from '../components/brands';
import QuickContactSection from '../components/quickContact';


import '../styles/header.module.css';
import "../styles/footer.module.css";
import "../styles/body.module.css";
import "../styles/about.module.css";
import "../styles/allproducts.module.css";
import "../styles/wiresabout.module.css";
import "../styles/brands.module.css";
import "../styles/quickContact.module.css";

export default function Home() {
  return (
      <>
        <BodySection/>
        <About/>
        <AllProducts/>
        <WiresAbout/>
        <BrandsSection/>
        <QuickContactSection/>
      </>
  );
}
