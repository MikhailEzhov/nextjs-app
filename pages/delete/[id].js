import { useRouter } from "next/router";
import Car from "../../components/Car";
import Layout from "../../components/Layout";

const Delete = () => {
  const router = useRouter();

  return (
    <Layout title={"Delete car"}>
      <h1>Delete car</h1>

      {/* <Car car={car} action={"delete"} /> */}
    </Layout>
  );
};

export default Delete;
