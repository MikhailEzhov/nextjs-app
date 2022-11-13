import Link from "next/link";
import { Card, ListGroup } from "react-bootstrap";

const Car = ({ car, action }) => {
  return (
    <Card style={{ maxWidth: "20rem", margin: "0 auto" }}>
      <Card.Img variant="top" src={car.image} />
      <Card.Body>
        <Card.Title>{car.name}</Card.Title>
        <Card.Text>{car.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>price: {car.price}</ListGroup.Item>
        <ListGroup.Item>contacts: {car.contacts}</ListGroup.Item>
        <ListGroup.Item>price: {car.price}</ListGroup.Item>
      </ListGroup>

      {car.technical_characteristics.brand && (
        <ListGroup className="list-group-flush">
          <i>Technical characteristics:</i>
          <ListGroup.Item>
            brand: {car.technical_characteristics.brand}
          </ListGroup.Item>
          <ListGroup.Item>
            model: {car.technical_characteristics.model}
          </ListGroup.Item>
          <ListGroup.Item>
            production year: {car.technical_characteristics.productionYear}
          </ListGroup.Item>
          <ListGroup.Item>
            body: {car.technical_characteristics.body}
          </ListGroup.Item>
          <ListGroup.Item>
            mileage: {car.technical_characteristics.mileage}
          </ListGroup.Item>
        </ListGroup>
      )}

      {car.options.length > 0 && (
        <ListGroup className="list-group-flush">
          <i>Options:</i>
          {car.options.map((option, index) => {
            return (
              <ListGroup.Item key={index}>{option.option_name}</ListGroup.Item>
            );
          })}
        </ListGroup>
      )}

      <Card.Body className="d-flex justify-content-center gap-3">
        <Link href={"/"} legacyBehavior>
          <a>go to home page</a>
        </Link>

        {action === "delete" && (
          <Link href={"/"} legacyBehavior>
            <a className="btn btn-danger btn-sm" role="button">
              confirm deletion!
            </a>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default Car;
