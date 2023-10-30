import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path="/LoginPage" element={<LoginPage />} /> {/* Correct path */}
        <Route path="/SignupPage" element={<SignupPage />} /> {/* Correct path */}
        <Route path='/courses/:id' element = {<SingleCourse/>}/>
        <Route path='/category/:category' element = {<Courses />}/>
        <Route path= "/cart" element = {<Cart />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
