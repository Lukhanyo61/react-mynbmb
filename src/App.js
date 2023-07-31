import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Index from './Pages/Index'
import About from './Pages/About';
import Beneficiary from './Pages/Beneficiary';
import Contact from './pages/contact';
import './App.css'
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Index />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Beneficary' element={<Beneficiary />} />
                
            </Routes>
        </Router>
    );
}
 
export default App;