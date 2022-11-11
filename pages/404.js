import Link from "next/link";
import Layout from "../components/Layout";

const Error = () => {
  return (
    <Layout>
      <h1>Error 404</h1>

      <Link href={"/"} legacyBehavior>
        <a>back to home page</a>
      </Link>
    </Layout>
  );
};

export default Error;
