import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getCar, resetCar } from "../../redux/actions";
import Layout from "../../components/Layout";
import CarItem from "../../components/CarItem";

const Delete = () => {
  const dispatch = useDispatch();
  const { car, loading } = useSelector((state) => state.cars);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(getCar(id));
    return () => {
      dispatch(resetCar());
    };
  }, [dispatch, id]);

  return (
    <Layout title={"Delete car"}>
      {loading && <h2>Loading....</h2>}
      {car && (
        <>
          <h1>Delete car</h1>
          <CarItem car={car} action={"delete"} />
        </>
      )}
    </Layout>
  );
};

export default Delete;
