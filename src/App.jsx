import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HotDrinks } from "./pages/HotDrinks";
import { IcedDrinks } from "./pages/IcedDrinks";
import { Home } from './pages/Home';

export function App() {
  return (
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/hot-drinks" element={<HotDrinks />} />
          <Route path="/iced-drinks" element={<IcedDrinks />} />
      </Routes>
    </Router>
  );
}
