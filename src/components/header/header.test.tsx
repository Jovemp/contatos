import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";
import logo from "../../resources/img/logo.png";

const renderComponent = () => render(<Header />);

const mockHistoryReplace = jest.fn();

jest.mock("history", () => ({
  ...jest.requireActual("history"),
  createBrowserHistory: () => {
    const replace = (param: string) => mockHistoryReplace(param);
    return { replace };
  },
}));

describe("Header", () => {
  test("Should render the component", () => {
    const { container } = renderComponent();
    expect(container).toBeDefined();
  });

  test("Should show icon", () => {
    renderComponent();

    const imagem = screen.getByTestId("icone");

    expect(imagem).toHaveAttribute("src", logo);
  });

  test("Should be possible to click on the icon and be redirected to the initial url", () => {
    renderComponent();

    const span = screen.getByTestId("span-icone");

    fireEvent.click(span);
    expect(mockHistoryReplace).toHaveBeenCalledWith("/");
  });
});
