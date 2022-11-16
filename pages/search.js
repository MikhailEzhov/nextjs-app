import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import MyTable from "../components/MyTable";
import SearchInputs from "../components/searchInputs";
import { setCars } from "../redux/actions";

// SSR
export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_URL}`);
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { serverData: data },
  };
};

const Search = ({ serverData }) => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(setCars(visibleCars));
  }, [search]);

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

  const visibleCars = filtration(serverData, search);

  return (
    <Layout title={"Сar search"}>
      <h1>Сar search</h1>
      <MyTable cars={visibleCars} variant={"search"}>
        <SearchInputs search={search} setSearch={setSearch} />
      </MyTable>
    </Layout>
  );
};

export default Search;
