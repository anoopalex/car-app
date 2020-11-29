export interface ICarSearchParams {
  color?: string;
  manufacturer?: string;
  page: number;
}
export interface ICar {
  color: string;
  fuelType: string;
  manufacturerName: string;
  mileage: IMileage;
  modelName: string;
  pictureUrl: string;
  stockNumber: number;
}
export interface ICarSearchResult {
  cars: ICar[];
  totalCarsCount: number;
  totalPageCount: number;
}

export interface IColorOptionResponse {
  colors: string[];
}
export interface IManufacturerOptionResponse {
  manufacturers: Array<{
    name: string;
    models: Array<{ name: string }>;
  }>;
}

export interface ICarDetails {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  mileage?: IMileage;
  fuelType: string;
  color: string;
  pictureUrl: string;
}

interface IMileage {
  number?: number;
  unit?: string;
}
