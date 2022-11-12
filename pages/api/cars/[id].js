import { cars } from "./data";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    const { id } = request.query;

    const car = cars.find((car) => car.id.toString() === id);

    if (!car) {
      return response.status(400).json("not found");
    }

    return response.status(200).json(car);
  }
}
