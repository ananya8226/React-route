import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Error from './components/Error';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element= {<MainHeader/>}>
            <Route index element= {<Home/>}/>
            <Route path="/about" element= {<About/>}  />
            <Route path="/contact" element={<Contact/> }/>
            <Route path="/*" element={<Error/>} />
        </Route>
     </Routes>
    </BrowserRouter>
  );
}
  
export default App;
