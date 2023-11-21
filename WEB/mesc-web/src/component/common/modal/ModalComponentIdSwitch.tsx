import React from "react";
// component
import { TXForm } from "./ModalTXForm";
import { CH1Form } from "../../../component/form/CH1Form";
import { CH2Form } from "../../../component/form/CH2Form";
import { TAForm } from "../../../component/form/TAForm";

import { Card } from "../../../state/create/BlockState";

export const ComponentIdSwitch = (props: { card: Card }) => {
  const card = props.card;
  switch (props.card.cardType) {
    case "TX":
      return <TXForm card={card} />;
    case "DT":
      return <TXForm card={card} />;
    case "CH1":
      return <CH1Form card={card} />;
    case "CH2":
      return <CH2Form card={card} />;
    case "TA":
      return <TAForm />;
  }
  return <div></div>;
};
