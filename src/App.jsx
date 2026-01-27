import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Offers from './pages/Offers';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="packages" element={<Packages />} />
        <Route path="offers" element={<Offers />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
