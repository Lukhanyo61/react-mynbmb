import React from 'react';

import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Index from './Pages/Index'
import About from './Pages/About';
import Beneficiary from './Pages/Beneficiary';
import Contact from './Pages/Contact';
import NavbarElements from 'Components/Navbar/NavbarElements'

 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/Index' exact element={<Index />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Beneficiary' element={<Beneficiary />} />
                
            </Routes>
        </Router>
    );
}
 
export default App;