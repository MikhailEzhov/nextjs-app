import Layout from "../components/Layout";
import MyTable from "../components/MyTable";

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
    props: { cars: data },
  };
};

const Index = ({ cars }) => {
  return (
    <Layout title={"Car list"}>
      <h1>Car list</h1>
      <MyTable cars={cars} variant={"mini"} />
    </Layout>
  );
};

export default Index;
