import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Interests from './pages/Interests';
import Layout from './layouts/Layout';

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
      </Routes>
  );
};

export default App;
