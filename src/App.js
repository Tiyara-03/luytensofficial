import './App.css';
import Footer1 from './components/Footer1'
import Home1 from './pages/Home1'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services1 from './pages/Services1';
import About1 from './pages/About1';
import ServiceDetail from './components/ServicesDetails';
import Contact1 from './pages/Contact1'
import Career from './pages/Career';
import { HashRouter as Router, Route, Routes} from "react-router-dom";




function App() {
  return (
    <div className="app">
      <Router>
          <Header />
          <Navbar />

        <Routes>     
          <Route exact path='/' element={<Home1/>}/>  
          <Route exact path='/services' element={<Services1/>} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route exact path='/about' element={<About1/>} />
          <Route path='/contact' element={<Contact1/>} />
          <Route path='/career' element={<Career/>} />
        </Routes>

          <Footer1/>

      </Router>



    </div>
  );
}

export default App;


