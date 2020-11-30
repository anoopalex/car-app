import { baseUrl } from "./constants";

/**
 * Fetch list of cars
 * @param params page | color | manufacturer
 */
export const getCarsAPI = (params: Record<string, string>) => {
  return request(`${baseUrl}/api/cars?` + new URLSearchParams(params));
};

/**
 * Fetch list of available car colours
 */
export const getCarColorsAPI = () => {
  return request(`${baseUrl}/api/colors`);
};

/**
 * Fetch list of available car manufacturers
 */
export const getCarManufacturersAPI = () => {
  return request(`${baseUrl}/api/manufacturers`);
};

/**
 * * @param stockNumber
 * Fetch selected car details
 */
export const getCarDetailsAPI = (stockNumber: string) => {
  return request(`${baseUrl}/api/cars/${stockNumber}`);
};

/**
 * * @param url http request url
 * * @param method | "GET" | "PUT" | "POST" | "DELETE" | "PATCH"
 */
const request = (url: string, method = "GET") =>
  fetch(url, {
    method: method,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "private",
    },
  }).then((response) => response.json());
