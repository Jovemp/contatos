import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardList from "./index";
import favorite from "../../resources/img/favorite.png";
import starImage from "../../resources/img/star.png";

const defaultProps = {
  onClickStar: () => {},
  contato: {
    star: false,
    shortName: "dustin_henderson",
    name: "Dustin Henderson",
    description:
      "Dustin Henderson é um personagem fictício do programa de televisão Netflix Stranger Things, interpretado por Gaten Matarazzo.",
    image:
      "data:image/jpeg;base64,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",
    template: "master",
    created: "2020-03-21T14:35:44.510Z",
    updated: "2020-03-22T14:35:44.510Z",
    plan: "standard",
    culture: "pt-BR",
    analytics: {
      user: {
        total: 100,
        actived: 2,
      },
      message: {
        received: 10000,
        sent: 10001,
      },
    },
  },
  onClick: () => {},
};

const renderComponent = (props = defaultProps) =>
  render(<CardList {...props} />);

describe("CardList", () => {
  test("Should render the component", () => {
    const { container } = renderComponent();
    expect(container).toBeDefined();
  });

  test("Should be able to show contact name", () => {
    renderComponent();

    const name = screen.getByTestId("name-contato");

    expect(name).toHaveTextContent(defaultProps.contato.name);
  });

  test("Should be able to trigger onClickStar event when clicking star", () => {
    const mock = { ...defaultProps, onClickStar: jest.fn() };
    renderComponent(mock);

    const star = screen.getByTestId("star-contato");

    fireEvent.click(star);

    expect(mock.onClickStar).toHaveBeenCalledTimes(1);
  });

  test("Should be able to trigger onClick event when clicking card", () => {
    const mock = { ...defaultProps, onClick: jest.fn() };
    renderComponent(mock);

    const card = screen.getByTestId("card-contato");

    fireEvent.click(card);

    expect(mock.onClick).toHaveBeenCalledTimes(1);
  });

  test("Should show yellow star when favorite", () => {
    const mock = {
      ...defaultProps,
      contato: { ...defaultProps.contato, star: true },
    };
    renderComponent(mock);

    const star = screen.getByTestId("star-contato");

    expect(star).toHaveAttribute("src", starImage);
  });

  test("Should show white star when not favorite", () => {
    renderComponent(defaultProps);

    const star = screen.getByTestId("star-contato");

    expect(star).toHaveAttribute("src", favorite);
  });
});
