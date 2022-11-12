import { cars } from "./data";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    return response.status(200).json(cars);
  }

  if (method === "POST") {
    const { body } = request;
    cars.push({ ...body, id: cars.length + 1 });
    return response.status(200).json(cars);
  }
}