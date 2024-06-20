import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Adminlogin from './Components/Adminlogin';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import ForgetPassword from './Components/ForgetPassword';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Plans from './Components/Plans';
import Signup from './Components/Signup';
import TrainerForgetPassword from './Components/TrainerForgetPassword';
import Trainerlogin from './Components/Trainerlogin';
import Trainersignup from './Components/Trainersignup';
import TrainerUpdatePassword from './Components/TrainerUpdatePassword';
import UpdatePassword from './Components/UpdatePassword';
import Video from './Components/Video';


function App() {
  return (
    <div className='wrapper'><BrowserRouter>
      <Header />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signuped" element={<Login />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="/Plan" element={<Plans />} />
          <Route path="/Cancel" element={<Home />} />
          <Route path="/logined" element={<Home />} />
          <Route path="/Forget" element={<ForgetPassword />} />
          <Route path="/Sendotp" element={<UpdatePassword />} />
          <Route path="/Updated" element={<Login />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/trainerforgotpassword" element={<TrainerForgetPassword />} />
          <Route path="/tsendotp" element={<TrainerUpdatePassword />} />
          <Route path="/tUpdated" element={<Trainerlogin />} />
          <Route path="/trainerlogin" element={<Trainerlogin />} />
          <Route path="/tsignup" element={<Trainersignup />} />
          <Route path="/Intro" element={<Video />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
