import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const View = () => {
  const router = useRouter();

  return (
    <Layout title={"View car information"}>
      <h1>View car information</h1>

      <div>car - {router.query.id}</div>
    </Layout>
  );
};

export default View;
