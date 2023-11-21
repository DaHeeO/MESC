import React from "react";
// component
import { TXForm } from "./TXForm";
import { CH1Form } from "./CH1Form";
import { CH2Form } from "./CH2Form";
import { TAForm } from "./TAForm";

import { Card } from "../../state/create/BlockState";

export const ComponentIdSwitch = (props: { card: Card }) => {
  const card = props.card;
  switch (props.card.cardType) {
    case "TX":
      return <TXForm card={card} />;
    case "DT":
      return <TXForm card={card} />;
      case "DTX":
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
