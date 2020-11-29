import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { carDescription, chooseFavoriteDescription } from "../constants";
import { useLocalStorage } from "../custom-hooks/UseLocalStorage";
import { getCarDetailsAPI } from "../endpoints";
import { ICarDetails } from "../types";
import NotFound from "./NotFound";

const CarDetails = () => {
  let { id } = useParams<{ id: string }>();
  const [carDetails, setCarDetails] = React.useState<ICarDetails>();
  const [hasError, setHasError] = React.useState<boolean>(false);
  const [favoriteStatus, toggleFavoriteStatus] = useLocalStorage(id);
  useEffect(() => {
    getCarDetailsAPI(id)
      .then(({ car }) => {
        setCarDetails(car);
      })
      .catch((error) => {
        setHasError(true);
      });
  }, [id]);

  return (
    <div className="page-details-wrapper">
      {carDetails && (
        <>
          <img
            src={carDetails.pictureUrl}
            alt="Car"
            className="car-detail-image"
          />
          <div className="center-align details-wrapper">
            <div className="details-layout">
              <div className="title-1 bold bottom-margin">{`${carDetails.manufacturerName} ${carDetails.modelName}`}</div>
              <div className="title-2 bottom-margin">
                {`Stock # ${carDetails.stockNumber} - ${
                  carDetails?.mileage?.number
                } - ${carDetails?.mileage?.unit?.toUpperCase()} - ${
                  carDetails.fuelType
                } - ${carDetails.color}`}
              </div>
              <div className="title-3 bottom-margin">{carDescription}</div>
            </div>
            <div className="fav-box title-3">
              <div>{chooseFavoriteDescription}</div>
              <Button
                className="button button-margin"
                onClick={toggleFavoriteStatus as () => void}
              >
                {favoriteStatus ? "Remove" : "Save"}
              </Button>
            </div>
          </div>
        </>
      )}
      {hasError && <NotFound />}
    </div>
  );
};

export default CarDetails;
