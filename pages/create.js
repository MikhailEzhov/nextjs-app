import { useSelector } from "react-redux";
import Form from "../components/Form";
import Layout from "../components/Layout";

const Create = () => {
  const { carFrame } = useSelector((state) => state.cars);

  return (
    <Layout title={"Add car"}>
      <h1>Add car</h1>
      <Form car={carFrame} action={"create"} />
    </Layout>
  );
};

export default Create;
