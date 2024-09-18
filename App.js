import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import Service from './Service';
import Choose from './Choose ';

import News from './News';
import Footer from './Footer';
import About from './About';
import Header from './Header';
import Contact from './Contact';
import Udyam from './Udyam';

import About2 from './About2';
import { Route,Router,Routes,} from 'react-router-dom';
import Gst from './Gst';
import Ifsc from './Ifsc';
import Home from './Home';
function App() {
  return (
   <>
 
 <Header/>
 
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About2 />} />
        <Route path="/udyam" element={<Udyam/> } />
        <Route path="/gst" element={<Gst/>} />
        <Route path="/ifsc" element={<Ifsc/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

    

   


  

   </>
  );
}

export default App;
