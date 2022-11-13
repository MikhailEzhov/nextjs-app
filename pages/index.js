import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../store/actions";
import Layout from "../components/Layout";
import MyTable from "../components/MyTable";

const Index = () => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <Layout title={"Car list"}>
      <h1>Car list</h1>

      {loading && <h2>Loading....</h2>}
      {error && <h2>{error}</h2>}
      {cars && <MyTable cars={cars} variant={"mini"} />}
    </Layout>
  );
};

export default Index;
