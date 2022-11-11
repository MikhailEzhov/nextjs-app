import Link from "next/link";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link legacyBehavior href={"/"}>
            <a className="text-decoration-none">Home</a>
          </Link>
          <Link legacyBehavior href={"/search"}>
            <a className="text-decoration-none">Сar search</a>
          </Link>
          <Link legacyBehavior href={"/create"}>
            <a className="text-decoration-none">Add car</a>
          </Link>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
