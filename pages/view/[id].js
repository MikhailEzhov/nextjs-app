import Car from "../../components/Car";
import Layout from "../../components/Layout";

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

      <Car car={car} action={"view"} />
    </Layout>
  );
};

export default View;
