import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Update = () => {
  const router = useRouter();

  return (
    <Layout title={"Update car"}>
      <h1>Update car</h1>

      <div>car - {router.query.id}</div>
    </Layout>
  );
};

export default Update;
