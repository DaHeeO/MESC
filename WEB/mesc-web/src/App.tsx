import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
//Header
import Layout from "./pages/layout";
// 하위페이지
import Main from "./pages/main";
import Menu1 from "./pages/menu1";
import Menu2 from "./pages/menu2";
import Menu3 from "./pages/menu3";
import Menu4 from "./pages/menu4";

function App() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="Main" element={<Main />} />
            <Route path="Menu1" element={<Menu1 />} />
            <Route path="Menu2" element={<Menu2 />} />
            <Route path="Menu3" element={<Menu3 />} />
            <Route path="Menu4" element={<Menu4 />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
