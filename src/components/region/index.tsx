import React, { HtmlHTMLAttributes } from "react";
import { useListagem } from "../../contexts/listagem";
import { parseISO } from "date-fns";

import { Container } from "./styles";

const Region: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ ...rest }) => {
  const { contatoSelecionado } = useListagem();

  const data = contatoSelecionado?.created
    ? parseISO(contatoSelecionado?.created!).toString()
    : "";
  return (
    <Container {...rest}>
      <div>
        <p>Region and Idiom</p>
        <h6>{contatoSelecionado?.culture!}</h6>
        <p>Timezone</p>
        <h6>
          {data.match(/([A-Z]+[\+-][0-9]+.*)/)
            ? data.match(/([A-Z]+[\+-][0-9]+.*)/)![1]
            : ""}
        </h6>
      </div>
    </Container>
  );
};

export default Region;
