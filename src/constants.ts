import { ICar, ICarSearchResult } from "./types";

export const baseUrl = "https://auto1-mock-server.herokuapp.com";
export const initialCarSearchParams = { color: "", manufacturer: "", page: 1 };

const defaultCarDetails: ICar = {
  stockNumber: 0,
  manufacturerName: "",
  modelName: "",
  mileage: {
    number: 0,
    unit: "",
  },
  fuelType: "",
  color: "",
  pictureUrl: "",
};

export const carDescription = `This car is currently available and can be delivered as soon as tomorrow morning.
Please be aware that delivery times shown in this page are not definitive and may
change due to bad weather conditions.`;

export const chooseFavoriteDescription = `If you like this car, click the button and save it in your
collection of favorite items.`;

export const getInitialCarMockData = (): ICar[] => {
  let initialCarMockData = [];
  for (let i = 0; i < 10; i++) {
    initialCarMockData.push(defaultCarDetails);
  }
  return initialCarMockData;
};

export const initialCarSearchResult: ICarSearchResult = {
  cars: getInitialCarMockData(),
  totalCarsCount: 0,
  totalPageCount: 1,
};
