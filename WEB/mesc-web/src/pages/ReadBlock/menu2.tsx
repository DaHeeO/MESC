import { SelectBlock } from "../../component/Block/Select/SelectBlock";
import { AboutContainer } from "../../component/common/About/AboutContainer";

function Menu2() {
  return (
    <AboutContainer
      height=" 100%"
      style={{ overflowX: "auto", border: "1px solid red" }}
    >
      <SelectBlock data={[]} />
    </AboutContainer>
  );
}
export default Menu2;
