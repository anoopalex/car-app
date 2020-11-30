import React from "react";
import { Link } from "react-router-dom";
import { ICar } from "../types";

interface ICarProps {
  isLoading: boolean;
  car: ICar;
}

const CarTile = ({ isLoading, car }: ICarProps) => (
  <div className="car-tile">
    {isLoading ? (
      <div className="image-loading"></div>
    ) : (
      <img
        className="image-border"
        alt="Car"
        src={car.pictureUrl}
        width="90px"
        height="70px"
      />
    )}
    <div className="car-content">
      <div
        className={
          isLoading
            ? "title-2 bold tile-item loading-element"
            : "title-2 bold tile-item"
        }
      >
        {`${car.manufacturerName} ${car.modelName}`}
      </div>
      <div
        className={
          isLoading ? "title-3 tile-item loading-element" : "title-3 tile-item"
        }
      >
        {`Stock # ${car.stockNumber} - ${
          car.mileage?.number
        } ${car.mileage?.unit?.toLocaleUpperCase()} - ${car.fuelType} - ${
          car.color
        }`}
      </div>
      <Link
        className={
          isLoading
            ? "link tile-item loading-element"
            : "link tile-item title-3"
        }
        to={`/car-details/${car.stockNumber}`}
      >
        View details
      </Link>
    </div>
  </div>
);

export default CarTile;
