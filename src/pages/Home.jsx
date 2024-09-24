import { useNavigate } from "react-router-dom";
import "./Home.css";

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
        <p className="text-xl-center">
          Start your exciting day with a cup of hot or cold drinks
        </p>
        <div className="button-group">
          <button className="drink-button" onClick={handleHotDrinks}>
            HOT DRINKS
          </button>
          <button className="drink-button" onClick={handleIcedDrinks}>
            ICED DRINKS
          </button>
        </div>
        <footer className="footer">
          <p>
            Made with ❤️ by Shuveksha Tuladhar &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}
