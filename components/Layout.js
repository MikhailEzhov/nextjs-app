import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        <meta name="keywords" content="nextjs,react,redux" />
        <meta name="description" content="app created with next.js" />
        <meta charSet="utf-8" />
      </Head>

      <Header />

      <Container>
        <Row className="mt-3 text-center pb-4">
          <Col>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
