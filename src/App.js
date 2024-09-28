import './App.css';
// import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
return (
    <div className="app">
      <Navbar/>
      <Home/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;


