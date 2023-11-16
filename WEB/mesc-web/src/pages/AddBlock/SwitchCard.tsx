import { useRecoilValue } from "recoil";
import { TxTaState, Ch1State, Ch2State } from "../../state/create/CreateState";

interface CardIdSwitchProps {
  cardId: string;
}

export const SwitchCard = ({ cardId }: CardIdSwitchProps) => {
  const TxCard = useRecoilValue(TxTaState);
  const TaCard = useRecoilValue(TxTaState);
  const Ch1Card = useRecoilValue(Ch1State);
  const Ch2Card = useRecoilValue(Ch2State);
  switch (cardId) {
    case "Tx":
      return TxCard;
    case "TA":
      return TaCard;
    case "Ch1":
      return Ch1Card;
    case "Ch2":
      return Ch2Card;
    default:
      return null;
  }
};
