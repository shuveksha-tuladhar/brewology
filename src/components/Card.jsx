import { useState } from "react";
import "./Card.css";
import { Modal } from "./Modal";

export function Card({ drinkType }) {
  const [selectedDrink, setSelectedDrink] = useState(null);

  const listIced = [
    {
      title: "Iced Coffee",
      description:
        "A coffee with ice, typically served with a dash of milk, cream or sweetener—iced coffee is really as simple as that.",
      ingredients: ["Coffee", "Ice", "Sugar*", "Cream*"],
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg",
      id: 1,
    },
    {
      title: "Iced Espresso",
      description:
        "Like an iced coffee, iced espresso can be served straight or with a dash of milk, cream or sweetener. You can also ice speciality espresso-based drinks like americanos, mochas, macchiatos, lattes and flat whites.",
      ingredients: ["Espresso", "Ice", "Sugar*", "Cream*"],
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/Home_Made_Ice_Coffee.jpg",
      id: 2,
    },
    {
      title: "Cold Brew",
      description:
        "The trendiest of the iced coffee bunch, cold brew coffees are made by steeping coffee beans from anywhere between 6-36 hours, depending on how strong you would like your cold brew. Once the beans are done steeping, add cold milk or cream.",
      ingredients: ["Long steeped coffee", "Ice"],
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ColdBrewCoffeein_Cans.png/640px-ColdBrewCoffeein_Cans.png",
      id: 3,
    },
    {
      title: "Frappuccino",
      description:
        "Made famous by Starbucks, the Frappuccino is a blended iced coffee drink that’s topped with whipped cream and syrup. ",
      ingredients: ["Espresso", "Blended ice", "Whip*"],
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Strawberry_Delight_Frappuccino.JPG",
      id: 4,
    },
    {
      title: "Nitro",
      description:
        "A cold brew + nitrogen bubbles = a cold brew coffee with a frothy, Guinness-like consistency. (It’s poured via a nitro tap, too.)",
      ingredients: ["Coffee", "Nitrogen bubbles", "Sugar*", "Cream*"],
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/76/Nitro_Cold_Brew.jpg",
      id: 5,
    },
    {
      title: "Mazagran",
      description:
        "Mazagran coffee is a cross between iced coffee, tea and your favorite rum drink. It typically consists of espresso, lemon, sugar and (sometimes) rum.",
      ingredients: ["Coffee", "Sugar", "Lemon", "Rum*"],
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Caf%C3%A9_mazagran.jpg",
      id: 6,
    },
  ];

  const listHot = [
    {
      title: "Caramel Latte",
      description:
        "Om du gillar latte med en speciell smak kan karamell latte vara det bästa alternativet för att ge dig en upplevelse av den naturliga sötman och krämigheten hos ångad mjölk och karamell.",
      ingredients: ["Espresso", "Ångad mjölk", "Karamellsirap"],
      image:
        "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 3,
    },
    {
      title: "Cappuccino",
      description:
        "Cappuccino är en latte som är gjord med mer skum än ångad mjölk, ofta med ett strö av kakaopulver eller kanel på toppen. Ibland kan du hitta variationer som använder grädde istället för mjölk eller sådana som tillsätter smakämnen också.",
      ingredients: ["Espresso", "Ångad mjölk", "Foam"],
      image:
        "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 4,
    },
    {
      title: "Americano",
      description:
        "Med en liknande smak som svart kaffe består americano av en espresso skott utspätt med hett vatten.",
      ingredients: ["Espresso", "Hett vatten"],
      image:
        "https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 5,
    },
    {
      title: "Espresso",
      description:
        "Ett espressoskott kan serveras ensamt eller användas som grund för de flesta kaffedrycker, som latte och macchiato.",
      ingredients: ["Espresso"],
      image:
        "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 6,
    },
    {
      title: "Macchiato",
      description:
        "Macchiaton är en annan espresso-baserad dryck som har en liten mängd skum på toppen. Det är det glada mellanrummet mellan en cappuccino och en doppio.",
      ingredients: ["Espresso", "Foam"],
      image:
        "https://images.unsplash.com/photo-1557772611-722dabe20327?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 7,
    },
    {
      title: "Mocha",
      description:
        "För alla chokladälskare där ute kommer ni att bli förälskade i en mocha. Mocha är en choklad-espressodryck med ångad mjölk och skum.",
      ingredients: ["Espresso", "Ångad mjölk", "Choklad"],
      image:
        "https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 8,
    },
    {
      title: "Hot Chocolate",
      description:
        "Under kalla vinterdagar får en kopp varm choklad dig att känna dig bekväm och lycklig. Den får dig också att må bra eftersom den innehåller energigivande koffein.",
      ingredients: ["Choklad", "Mjölk"],
      image:
        "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
      id: 9,
    },
    {
      title: "Chai Latte",
      description:
        "Om du letar efter en smakfull varm dryck mitt i vintern, välj chai latte. Kombinationen av kardemumma och kanel ger en underbar smak.",
      ingredients: ["Te", "Mjölk", "Ingefära", "Kardemumma", "Kanel"],
      image:
        "https://images.unsplash.com/photo-1578899952107-9c390f1af1b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWklMjBsYXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
      id: 10,
    },
  ];

  const drinksToDisplay = drinkType === "Iced" ? listIced : listHot;

  if (!drinksToDisplay || drinksToDisplay.length === 0) {
    return <p>No drinks available</p>;
  }

  const handleCardClick = (drink) => {
    setSelectedDrink(drink);
  };

  const handleCloseModal = () => {
    setSelectedDrink(null);
  };

  return (
    <div>
    <div className="card-container">
      {drinksToDisplay.map((item) => (
        <button
          className="card"
          key={item.id}
          onClick={() => handleCardClick(item)}
        >
          <img src={item.image} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
          </div>
        </button>
      ))}
    </div>
    {selectedDrink && (
        <Modal drinkItem={selectedDrink} onClose={handleCloseModal} />
      )}
    </div>
  );
}
