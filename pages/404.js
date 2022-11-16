import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Layout from "../components/Layout";

const Error = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1 className="mb-3">Error 404</h1>
      <Button onClick={() => router.back()}>Click here to go back</Button>
    </Layout>
  );
};

export default Error;
