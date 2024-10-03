import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Drinks } from "./pages/Drinks";
import { Home } from './pages/Home';

export function App() {
  return (
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path=":drinkType" element={<Drinks />} />
      </Routes>
    </Router>
  );
}
