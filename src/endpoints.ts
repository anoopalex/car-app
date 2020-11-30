import { baseUrl } from "./constants";

export const getCarsAPI = (params: Record<string, string>) => {
  return request(`${baseUrl}/api/cars?` + new URLSearchParams(params));
};

export const getCarColorsAPI = () => {
  return request(`${baseUrl}/api/colors`);
};

export const getCarManufacturersAPI = () => {
  return request(`${baseUrl}/api/manufacturers`);
};

export const getCarDetailsAPI = (stockNumber: string) => {
  return request(`${baseUrl}/api/cars/${stockNumber}`);
};

const request = (url: string, method = "GET") =>
  fetch(url, {
    method: method,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "private",
    },
  }).then((response) => response.json());
