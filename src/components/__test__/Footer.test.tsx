import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

test("Renders Footer element with content", () => {
  render(<Footer />);
  const footerText = screen.getByText("© AUTO1 Group 2018");
  expect(footerText).toBeInTheDocument();
});
