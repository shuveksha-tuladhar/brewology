import { useNavigate } from "react-router-dom";
import "./Header.css";

export function Header({drinkType}) {
  const navigate = useNavigate();

  const drinkNext = drinkType === "Hot" ? "Iced" : "Hot";

  const handleDrinkClick = () => {
    if (drinkNext === "Hot") {
      navigate("/hot-drinks");
    } else if (drinkNext === "Iced") {
      navigate("/iced-drinks");
    }
  };
  return (
    <>
      <nav className="navbar py-1 m-2">
        <img src="/brandNameBrown.svg" alt="Logo"></img>
        <h1 className="heading-text">Discover Our {drinkType} Drinks!</h1>
        <div className="button-group">
          <button className="drink-button" onClick={handleDrinkClick}>
            {drinkNext}
          </button>
          <button className="drink-button" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </nav>
      <hr className="custom-line" />
      
    </>
  );
}