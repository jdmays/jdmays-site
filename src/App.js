import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Cafe from './pages/cafe/Cafe';
import CafeFaq from './pages/cafe/CafeFaq';
import Interests from './pages/Interests';
import Layout from './layouts/Layout';
import CafeLayout from './layouts/CafeLayout';
import CafeTeam from './pages/cafe/CafeTeam';
import CafeContact from './pages/cafe/CafeContact';

import './App.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="experience" element={<Experience />} />
                <Route path="skills" element={<Skills />} />
                <Route path="education" element={<Education />} />
                <Route path="interests" element={<Interests />} />
            </Route>

            <Route path="/cafe" element={<CafeLayout />}>
                <Route index element={<Cafe />} />
                <Route path="cafefaq" element={<CafeFaq />} />
                <Route path="cafeteam" element={<CafeTeam />} />
                <Route path="cafecontact" element={<CafeContact />} />
            </Route>
        </Routes>
    );
};

export default App;
