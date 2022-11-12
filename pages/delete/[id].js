import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Delete = () => {
  const router = useRouter();

  return (
    <Layout title={"Delete car"}>
      <h1>Delete car</h1>

      <div>car - {router.query.id}</div>
    </Layout>
  );
};

export default Delete;
