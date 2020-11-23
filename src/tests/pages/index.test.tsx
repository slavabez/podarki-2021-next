import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";

describe("Home page", () => {
  test(`renders with no errors`, () => {
    render(<Home />);
    expect(
      screen.getByRole(`heading`, { name: "Онлайн каталог" })
    ).toBeInTheDocument();
  });
});
