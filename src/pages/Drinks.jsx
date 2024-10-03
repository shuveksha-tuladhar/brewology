import { useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { useEffect, useState } from "react";

export function Drinks() {
  const { drinkType } = useParams();
  const [drinksToDisplay, setDrinksToDisplay] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (drinkType === "hot-drinks") {
      setDrinksToDisplay("Hot");
    } else if (drinkType === "iced-drinks") {
      setDrinksToDisplay("Iced");
    }
  }, [drinkType]);

  useEffect(() => {
    if (drinksToDisplay !== "") {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api.sampleapis.com/coffee/${drinksToDisplay.toLowerCase()}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [drinksToDisplay]);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Header drinkType={drinksToDisplay} />
      {loading && <>Loading...</>}
      {!loading && <Card drinkType={drinksToDisplay} data={data} />}
      <Footer />
    </div>
  );
}
