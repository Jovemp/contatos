import * as React from "react";
import { useState, useContext } from "react";

interface OrganizacaoContextData {
  updateOrganizacao: (organizacao: Organize) => void;
  organizacao: Organize;
}

export enum Organize {
  ORGANIZE_BLOCKS,
  ORGANIZE_LIST,
}

const OrganizacaoContext = React.createContext<OrganizacaoContextData>(
  {} as OrganizacaoContextData
);

export const OrganizacaoProvider: React.FC = ({ children }) => {
  const [organize, setOrganize] = useState<Organize>(Organize.ORGANIZE_BLOCKS);

  async function updateOrganizacao(organizacao: Organize) {
    setOrganize(organizacao);
  }

  return (
    <OrganizacaoContext.Provider
      value={{ organizacao: organize, updateOrganizacao }}
    >
      {children}
    </OrganizacaoContext.Provider>
  );
};

export function useOrganizacao() {
  const context = useContext(OrganizacaoContext);

  return context;
}
