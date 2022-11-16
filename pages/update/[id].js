import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form";
import Layout from "../../components/Layout";
import { getCar, resetCar } from "../../redux/actions";

const Update = () => {
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
    <Layout title={"Update car"}>
      {loading && <h2>Loading....</h2>}
      {car && (
        <>
          <h1>Update car</h1>
          <Form car={car} action={"update"} />
        </>
      )}
    </Layout>
  );
};

export default Update;
