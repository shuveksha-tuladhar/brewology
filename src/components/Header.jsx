import { useNavigate } from 'react-router-dom';
import './Header.css'

export function Header({drinkType, drinkNext}){
  const navigate = useNavigate();

  const handleDrinkClick = () => {
    if(drinkNext === "Hot"){
      navigate('/hot-drinks');
    } else if (drinkNext === "Iced"){
      navigate('/iced-drinks');
    }
    return
  }
    return (
        <nav className="navbar p-3">
          <img src="/brandNameBrown.svg" alt="Logo"></img>
          <div className="button-group">
            <button className="drink-button" onClick={handleDrinkClick}>{drinkNext}</button>
            <button className="drink-button" onClick={ () => navigate("/")}>Home</button>
           
          </div>
          <hr className="custom-line"/>
          <text>Explore the {drinkType} drinks!</text>
        </nav>
    )
}