import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CarSearch from "../pages/CarSearch";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { baseUrl, getInitialCarMockData } from "../constants";
import { ICarSearchResult } from "../types";

const history = createBrowserHistory();
const mockSearchResult: ICarSearchResult = {
  cars: getInitialCarMockData(),
  totalCarsCount: 100,
  totalPageCount: 1,
};

const server = setupServer(
  rest.get(`${baseUrl}/api/cars?`, (req, res, ctx) => {
    return res(ctx.json(mockSearchResult));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Displays car search page", async () => {
  render(
    <Router history={history}>
      <CarSearch />
    </Router>
  );
  const paginationElement = screen.getByText("Showing 0 of 0");
  fireEvent.click(screen.getByText("First"));
  await waitFor(() => screen.getByText("Showing 10 of 100"));
  expect(paginationElement).toHaveTextContent("Showing 10 of 10");
});
