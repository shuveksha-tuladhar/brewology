import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function IcedDrinks() {
    return (
        <div>
           <div>
            <Header drinkType="Iced" drinkNext="Hot"/>
            <Card drinkType="Iced"/>
            <Footer/>
        </div>
        </div>
    )
}