import Layout from "../components/Layout";
import MyTable from "../components/MyTable";

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

const Search = ({ cars }) => {
  return (
    <Layout title={"Сar search"}>
      <h1>Сar search</h1>

      {cars && <MyTable cars={cars} variant={"search"} />}
    </Layout>
  );
};

export default Search;
