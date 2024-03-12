import { createContext, useContext, useState } from "react";
import AccordianItem from "./AccordianItem";

const AccordionContext = createContext();

export function useAccordianContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accodrion-realted components must be wrapped by accordion."
    );
  }
  return ctx;
}

export default function Accordian({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordian.Item = AccordianItem;
