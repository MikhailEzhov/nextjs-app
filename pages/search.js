import { useState } from "react";
import Layout from "../components/Layout";
import MyTable from "../components/MyTable";
import SearchInputs from "../components/searchInputs";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_URL}`);
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { cars: data },
  };
};

const Search = ({ cars }) => {
  const [search, setSearch] = useState({
    brand: "",
    model: "",
    productionYear: "",
    body: "",
    mileageFrom: "",
    mileageTo: "",
    priceFrom: "",
    priceTo: "",
  });

  const filtration = (cars, search) => {
    const filteredCars = cars.filter(
      (car) =>
        car.technical_characteristics.brand.indexOf(search.brand) > -1 &&
        car.technical_characteristics.model.indexOf(search.model) > -1 &&
        car.technical_characteristics.productionYear
          .toString()
          .indexOf(search.productionYear) > -1 &&
        car.technical_characteristics.body.indexOf(search.body) > -1 &&
        car.technical_characteristics.mileage >= (search.mileageFrom || 0) &&
        car.technical_characteristics.mileage <=
          (search.mileageTo || 9999999999) &&
        car.price >= (search.priceFrom || 0) &&
        car.price <= (search.priceTo || 9999999999)
    );
    return filteredCars;
  };

  const visibleCars = filtration(cars, search);

  return (
    <Layout title={"Сar search"}>
      <h1>Сar search</h1>
      {cars && (
        <MyTable cars={visibleCars} variant={"search"}>
          <SearchInputs search={search} setSearch={setSearch} />
        </MyTable>
      )}
    </Layout>
  );
};

export default Search;
