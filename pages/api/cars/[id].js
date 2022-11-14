import { cars } from "./data";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    const { id } = request.query;
    const car = cars.find((car) => car.id === parseInt(id));
    return response.status(200).json(car);
  }

  if (method === "PUT") {
    const { body } = request;
    const index = cars.findIndex((car) => car.id === parseInt(body.id));
    const newCars = [...cars, (cars[index] = body)];
    return response.status(200).json(newCars);
  }

  if (method === "DELETE") {
    const { id } = request.query;
    const deletedCar = cars.find((car) => car.id === parseInt(id));
    const index = cars.findIndex((car) => car.id === parseInt(id));
    cars.splice(index, 1);
    return response.status(200).json(deletedCar);
  }
}
