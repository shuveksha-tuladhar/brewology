import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Footer } from "../components/Footer";

export function Home() {
  const navigate = useNavigate();

  const handleHotDrinks = () => {
    navigate("/hot-drinks");
  };

  const handleIcedDrinks = () => {
    navigate("/iced-drinks");
  };

  return (
    <div className="main-container">
      <div className="bg-image">
        <nav className="navbar p-3">
          <img src="/brandNameWhite.svg"></img>
          <div className="button-group">
            <button className="drink-button" onClick={ () => navigate(0)}>Home</button>
          </div>
        </nav>
        <h1 className="text-xl-center">Drinks crafted with passion</h1>
        <h4 className="text-xl-center">
          Start your exciting day with a cup of hot or cold drinks
        </h4>
        <div className="button-group">
          <button className="drink-button" onClick={handleHotDrinks}>
            HOT DRINKS
          </button>
          <button className="drink-button" onClick={handleIcedDrinks}>
            ICED DRINKS
          </button>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
