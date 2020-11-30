import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../components/UseLocalStorage";
import { carDescription, chooseFavoriteDescription } from "../constants";
import { getCarDetailsAPI } from "../endpoints";
import { ICarDetails } from "../types";
import NotFound from "./NotFound";

/**
 * Car details page
 */
const CarDetails = () => {
  let { id } = useParams<{ id: string }>();
  const [carDetails, setCarDetails] = React.useState<ICarDetails>();
  const [hasError, setHasError] = React.useState<boolean>(false);
  const [favoriteStatus, toggleFavoriteStatus] = useLocalStorage(id);
  useEffect(() => {
    window.scroll({ top: 0 });
    getCarDetailsAPI(id)
      .then(({ car }) => {
        setCarDetails(car);
      })
      .catch(() => {
        setHasError(true);
      });
  }, [id]);

  if (hasError) {
    // Display not found when API fails
    return <NotFound />;
  }

  return (
    <div className="page-details-wrapper">
      <div className="car-detail-image">
        <img
          src={carDetails?.pictureUrl}
          alt="Car"
          className="car-detail-image"
        />
      </div>
      <div className="center-align details-wrapper">
        <div className="details-layout">
          <div
            className={
              !carDetails
                ? "title-1 bold bottom-margin loading-element"
                : "title-1 bold bottom-margin"
            }
          >
            {carDetails &&
              `${carDetails.manufacturerName} ${carDetails.modelName}`}
          </div>
          <div
            className={
              !carDetails
                ? "title-2 bottom-margin loading-element"
                : "title-2 bottom-margin"
            }
          >
            {carDetails &&
              `Stock # ${carDetails.stockNumber} - ${
                carDetails.mileage?.number
              } - ${carDetails.mileage?.unit?.toUpperCase()} - ${
                carDetails.fuelType
              } - ${carDetails.color}`}
          </div>
          <div
            className={
              !carDetails
                ? "title-3 bottom-margin loading-element"
                : "title-3 bottom-margin"
            }
          >
            {carDescription}
          </div>
        </div>
        <div className="fav-box title-3">
          <div className={!carDetails ? "loading-element" : ""}>
            {chooseFavoriteDescription}
          </div>
          <Button
            className="button button-margin"
            disabled={!carDetails}
            onClick={toggleFavoriteStatus as () => void}
          >
            {/* Add/ Remove Car from favorites */}
            {favoriteStatus ? "Remove" : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
