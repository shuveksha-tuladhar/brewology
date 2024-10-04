import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const Page503 = ({drinksToDisplay}) => {
    return (
        <>
            <Header drinkType={drinksToDisplay} />
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-12 text-center">
              <h1>503</h1>
              <h2>Error</h2>
              <p>Sorry, there was an error fetching the data.</p>
            </div>
          </div>
          <Footer />
        </>
      );
}

export default Page503;