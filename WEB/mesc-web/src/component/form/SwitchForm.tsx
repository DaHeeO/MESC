import React from "react";
// component
import { TXForm } from "./TXForm";
import { CH1Form } from "./CH1Form";
import { CH2Form } from "./CH2Form";
import { TAForm } from "./TAForm";

interface ComponentIdSwitchProps {
  ComponentId: string;
}

export const ComponentIdSwitch = (props: ComponentIdSwitchProps) => {
  switch (props.ComponentId) {
    case "TX":
      return <TXForm />;
    case "CH1":
      return <CH1Form />;
    case "CH2":
      return <CH2Form />;
    case "TA":
      return <TAForm />;
  }
};
