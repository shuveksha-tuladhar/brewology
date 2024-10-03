import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const Page404 = ({drinksToDisplay}) => {
  return (
    <>
        <Header drinkType={drinksToDisplay} />
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-12 text-center">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page404;
