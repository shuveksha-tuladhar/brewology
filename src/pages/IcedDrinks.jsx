import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function IcedDrinks() {
    return (
        <div>
           <div>
            <Header drinkType="Iced" drinkNext="Hot"/>
            <Footer/>
        </div>
        </div>
    )
}