import { useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { useEffect, useState } from "react";
import Page503 from "./error/503";
import Page404 from "./error/404";
import { SearchBar } from "../components/SearchBar";

export function Drinks() {
  const { drinkType } = useParams();
  const [drinksToDisplay, setDrinksToDisplay] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setError(null);
    if (drinkType === "hot-drinks") {
      setDrinksToDisplay("Hot");
    } else if (drinkType === "iced-drinks") {
      setDrinksToDisplay("Iced");
    } else {
      setError({ status: 404, error: "Page not found" });
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
          setError({ status: 503, error: error });
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [drinksToDisplay]);

  const filteredData = searchInput
    ? data.filter((drink) =>
        drink.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : data;

  if (error) {
    console.error(error.error);
    switch (error.status) {
      case 404:
        return <Page404 drinksToDisplay={drinksToDisplay} />;
      case 503:
        return <Page503 drinksToDisplay={drinksToDisplay} />;
    }
  }

  return (
    <div>
      <Header drinkType={drinksToDisplay} />
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      {!loading && <Card drinkType={drinksToDisplay} data={filteredData} />}
      <Footer />
    </div>
  );
}
