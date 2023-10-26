import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Intro from "./pages/intro";

function App() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/Intro" element={<Intro />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
