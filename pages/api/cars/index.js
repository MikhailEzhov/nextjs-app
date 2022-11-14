import { cars } from "./data";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    return response.status(200).json(cars);
  }

  if (method === "POST") {
    const { body } = request;
    const newCars = cars.push(body);
    return response.status(200).json(newCars);
  }
}
