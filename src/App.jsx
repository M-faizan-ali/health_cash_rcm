import Footer from "./components/Footer";
import Header2 from "./components/Header2";
import ContactUs from "./components/ContactUs";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home";
import ServiceInfo from "./pages/ServiceInfo";
import ServicePage from "./pages/ServicePage";
export default function App() {
  return (
    <BrowserRouter>
      <Header2 />
      <Suspense fallback={<div>{/* <Loader /> */}</div>}>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/contact`} element={<ContactUs />} />
          <Route path={`/about`} element={<SideBar />} />
          <Route path={`/services`} element={<ServicePage />} />
          <Route path={`/services/:servicename`} element={<ServiceInfo />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
