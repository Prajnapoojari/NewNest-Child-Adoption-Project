import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import AdmissionPage from "./Pages/AdmissionPage";
import AdoptionService from "./Pages/AdoptionService";
import ContactUs from "./Pages/ContactUs";
import Donate from "./Pages/Donate";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import StaffRegistration from "./Pages/StaffRegistration";
import Volunteer from "./Pages/Volunteer";
import FAQ from "./Pages/FAQ";
import Legal from "./Pages/Legal";
import News from "./Pages/News";

function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignupPage" element={<SignUpPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AdmissionPage" element={<AdmissionPage />} />
        <Route path="/AdoptionService" element={<AdoptionService />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/StaffRegistration" element={<StaffRegistration />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/News" element={<News />} />
        </Routes>
</Router>
  );
}

export default App;