import Layout from "../../components/Layout";
import CarItem from "../../components/CarItem";

//SSR
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`${process.env.API_URL}/${id}`);
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { car: data },
  };
};

const View = ({ car }) => {
  return (
    <Layout title={"View car information"}>
      <h1>View car information</h1>
      <CarItem car={car} action={"view"} />
    </Layout>
  );
};

export default View;
