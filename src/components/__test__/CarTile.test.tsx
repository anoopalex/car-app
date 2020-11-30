import React from "react";
import { render, screen } from "@testing-library/react";
import CarTile from "../CarTile";
import { Router } from "react-router-dom";
import { ICar } from "../../types";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const mockCarDetails: ICar = {
  stockNumber: 0,
  manufacturerName: "Test manufacturer name",
  modelName: "Test model name",
  mileage: {
    number: 20,
    unit: "KM",
  },
  fuelType: "Petrol",
  color: "Red",
  pictureUrl: "test-url",
};
test("Renders Car tile details", () => {
  render(
    <Router history={history}>
      <CarTile isLoading car={mockCarDetails} />
    </Router>
  );
  expect(
    screen.getByText("Test manufacturer name Test model name")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Stock # 0 - 20 KM - Petrol - Red")
  ).toBeInTheDocument();
});
