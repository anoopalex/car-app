import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { initialCarSearchParams, initialCarSearchResult } from "../constants";
import {
  getCarColorsAPI,
  getCarManufacturersAPI,
  getCarsAPI,
} from "../endpoints";
import {
  ICar,
  ICarSearchResult,
  IColorOptionResponse,
  IManufacturerOptionResponse,
} from "../types";

const CarSearch = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [carSearchParams, setCarSearchParams] = React.useState(initialCarSearchParams);
  const [carSearchRequestParams, setCarSearchRequestParams] = React.useState(initialCarSearchParams);
  const [carSearchResult, setCarSearchResult] = React.useState(initialCarSearchResult);
  const [colorOptions, setColorOptions] = React.useState<string[]>([]);
  const [manufacturerOptions, setManufacturerOptions] = React.useState<string[]>([]);

  useEffect(() => {
    getCarColorsAPI().then((colorOptionResponse: IColorOptionResponse) => {
      if (colorOptionResponse?.colors) {
        setColorOptions(colorOptionResponse.colors);
      }
    });
    getCarManufacturersAPI().then(
      (manufacturerOptionResponse: IManufacturerOptionResponse) => {
        if (manufacturerOptionResponse?.manufacturers) {
          setManufacturerOptions(
            manufacturerOptionResponse.manufacturers.map(
              (manufacturer) => manufacturer.name
            )
          );
        }
      }
    );
  }, []);

  useEffect(() => {
    onCarSearch(1)();
  }, [carSearchRequestParams]);

  const onCarSearchParamChange = (e: React.ChangeEvent<any>) => {
    setCarSearchParams({
      ...carSearchParams,
      [e.target.name]: e.target.value,
    });
  };
  const onApplyFilter = () => {
    setCarSearchRequestParams(carSearchParams);
  };
  const onCarSearch = (nextPage: number) => () => {
    if (nextPage > 0 && nextPage <= carSearchResult.totalPageCount) {
      setIsLoading(true);
      getCarsAPI({
        ...carSearchRequestParams,
        page: nextPage.toString(),
      }).then((results: ICarSearchResult) => {
        setCarSearchResult(results);
        setCarSearchParams({
          ...carSearchParams,
          page: nextPage,
        });
        setIsLoading(false);
      });
    }
  };

  return (
    <div className="flex-display">
      <div className="search-box">
        <FormControl className="select" variant="outlined">
          <InputLabel shrink className="select-label">
            Color
          </InputLabel>
          <Select
            className="full-width"
            name="color"
            value={carSearchParams.color}
            onChange={onCarSearchParamChange}
          >
            {[
              <MenuItem value="" key="select">
                Select
              </MenuItem>,
              ...colorOptions.map((option: string, index: number) => (
                <MenuItem key={index} value={option} className="select-option">
                  {option}
                </MenuItem>
              )),
            ]}
          </Select>
        </FormControl>
        <FormControl className="select" variant="outlined">
          <InputLabel shrink className="select-label">
            Manufacturer
          </InputLabel>
          <Select
            className="full-width"
            name="manufacturer"
            value={carSearchParams.manufacturer}
            onChange={onCarSearchParamChange}
          >
            {[
              <MenuItem value="" key="select">
                Select
              </MenuItem>,
              ...manufacturerOptions.map((option: string, index: number) => (
                <MenuItem key={index} value={option} className="select-option">
                  {option}
                </MenuItem>
              )),
            ]}
          </Select>
        </FormControl>
        <div className="select">
          <div className="right-align">
            <Button className="button" onClick={onApplyFilter}>
              Filter
            </Button>
          </div>
        </div>
      </div>
      <div className="list-wrapper">
        <div className="title-2 bold tile-item">Available cars</div>
        <div className="title-2 tile-item">
          {`Showing ${carSearchResult.cars.length} of ${carSearchResult.totalCarsCount}`}
        </div>
        <div>
          {carSearchResult.cars.map((car: ICar, index: number) => (
            <div key={index} className="car-tile">
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
                      ? "title-2 bold tile-item loading"
                      : "title-2 bold tile-item"
                  }
                >
                  {`${car.manufacturerName} ${car.modelName}`}
                </div>
                <div
                  className={
                    isLoading
                      ? "title-3 tile-item loading"
                      : "title-3 tile-item"
                  }
                >
                  {`Stock # ${car.stockNumber} - ${
                    car.mileage?.number
                  } ${car.mileage?.unit?.toLocaleUpperCase()} - ${
                    car.fuelType
                  } - ${car.color}`}
                </div>
                <Link
                  className={
                    isLoading
                      ? "link tile-item loading"
                      : "link tile-item title-3"
                  }
                  to={`/car-details/${car.stockNumber}`}
                >
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-wrapper">
          <div className="pagination-item link-color" onClick={onCarSearch(1)}>
            First
          </div>
          <div
            className="pagination-item link-color"
            onClick={onCarSearch(carSearchParams.page - 1)}
          >
            Previous
          </div>
          <div className="pagination-item">{`Page ${carSearchParams.page} of ${carSearchResult.totalPageCount}`}</div>
          <div
            className="pagination-item link-color"
            onClick={onCarSearch(carSearchParams.page + 1)}
          >
            Next
          </div>
          <div
            className="pagination-item link-color"
            onClick={onCarSearch(carSearchResult.totalPageCount)}
          >
            Last
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSearch;