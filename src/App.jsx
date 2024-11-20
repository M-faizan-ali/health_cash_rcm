import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import NumberPercentage from "./components/NumberPercentage";
import HealthCare from "./components/HealthCare";
import WhoWeServe from "./components/WhoWeServe";
import WhatWeOfferFor from "./components/WhatWeOfferFor";
import WhyChooseUs from "./components/WhyChooseUs";
import AnimatedText from "./components/AnimtedText";
import BillingSolutions from "./components/BillingSolutions";
import TrustedLeaders from "./components/TrustedLeaders";
import Testomonials from "./components/Testomonials";
import CompanyNameSlider from "./components/CompanyNameSlider";
import ImmediateAssistance from "./components/ImmediateAssistance";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <div className="bg-body-color">
        <Header />
        <MenuBar/>
        <NumberPercentage/>
        <HealthCare/>
        <WhoWeServe/>
        <WhatWeOfferFor/>
        <WhyChooseUs/>
        <BillingSolutions/>
        <TrustedLeaders/>
        <Testomonials/>
        <CompanyNameSlider />
        <ImmediateAssistance/>
        <Footer/>
      </div>
    </>
  );
}