import React from "react";
import { render, screen } from "@testing-library/react";
import CardValor from "./index";
import sent from "../../resources/img/sent.png";

const defaultProps = {
  icone: sent,
  valor: "1.000",
  descricao: "Descricao Teste",
  corLogo: "#FFF55F",
};

const renderComponent = (props = defaultProps) =>
  render(<CardValor {...props} />);

describe("CardValor", () => {
  test("Should render the component", () => {
    const { container } = renderComponent();
    expect(container).toBeDefined();
  });

  test("Should show value", () => {
    renderComponent();

    const valor = screen.getByTestId("valor-card");

    expect(valor).toHaveTextContent(defaultProps.valor);
  });

  test("Should show description", () => {
    renderComponent();

    const descricao = screen.getByTestId("descricao-card");

    expect(descricao).toHaveTextContent(defaultProps.descricao);
  });

  test("Should show icon", () => {
    renderComponent();

    const imagem = screen.getByTestId("imagem-card");

    expect(imagem).toHaveAttribute("src", sent);
  });

  test("Should have default background color for icon", () => {
    renderComponent({ ...defaultProps, corLogo: "" });

    const fundo = screen.getByTestId("fundo-imagem-card");

    expect(fundo).toHaveStyle("background-color: #2cc3d5");
  });

  test("Should have background color informed on property", () => {
    renderComponent();

    const fundo = screen.getByTestId("fundo-imagem-card");

    expect(fundo).toHaveStyle(`background-color: ${defaultProps.corLogo}`);
  });
});
