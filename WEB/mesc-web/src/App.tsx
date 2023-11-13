import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
//Header
import Layout from "./pages/layout";
// 하위페이지
import Main from "./pages/main/main";
import { Menu1 } from "./pages/AddBlock/Add";
import Menu2 from "./pages/menu2";
import Menu3 from "./pages/menu3";
import Menu4 from "./pages/menu4";
import Mypage from "./pages/mypage";
import MyChatbot from "./pages/myChatbot";
import { Faq } from "./pages/FAQ/Faq";
// layout 미포함 page
import Login from "./pages/login";

function App() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="Mypage" element={<Mypage />} />
            <Route path="Menu1" element={<Menu1 />} />
            <Route path="Menu2" element={<Menu2 />} />
            <Route path="Menu3" element={<Menu3 />} />
            <Route path="Menu4" element={<Menu4 />} />
            <Route path="MyChatbot" element={<MyChatbot />} />
            <Route path="Fqa" element={<Faq />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;