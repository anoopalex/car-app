import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import CarDetails from "../CarDetails";

const history = createBrowserHistory();

test("Displays car image", async () => {
  render(
    <Router history={history}>
      <CarDetails />
    </Router>
  );
  const carImage = screen.getByAltText("Car");
  expect(carImage).toBeInTheDocument();
});
