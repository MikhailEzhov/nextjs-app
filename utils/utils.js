export const transformationOnCreation = (currentСar) => {
  const car = {
    ...currentСar,
    id: Date.now(),
    price: +currentСar.price,
    technical_characteristics: {
      ...currentСar.technical_characteristics,
      car_id: Date.now() + 1,
      productionYear: +currentСar.technical_characteristics.productionYear,
      mileage: +currentСar.technical_characteristics.mileage,
    },
  };
  return car;
};

export const transformationOnUpdate = (currentСar) => {
  const car = {
    ...currentСar,
    price: +currentСar.price,
    technical_characteristics: {
      ...currentСar.technical_characteristics,
      productionYear: +currentСar.technical_characteristics.productionYear,
      mileage: +currentСar.technical_characteristics.mileage,
    },
  };
  return car;
};
