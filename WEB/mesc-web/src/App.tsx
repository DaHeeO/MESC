import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Navigate } from "react-router-dom";
// Header
import Layout from "./pages/layout";
// Subpages
import { MainPage } from "./pages/main/MainPage";
import { Add } from "./pages/AddBlock/Add";
import { Modify } from "./pages/ReadBlock/Modify";
import Menu3 from "./pages/menu3";
import Menu4 from "./pages/menu4";
import MyChatbot from "./pages/myChatbot";
import { Faq } from "./pages/FAQ/Faq";
// Layout excluding page
import Login from "./pages/login";

function App() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<Layout />}>
            <Route path="Add" element={<Add />} />
            <Route path="Modify/:id" element={<Modify />} />
            {/* <Route path="Modify" element={<Modify />} /> */}
            <Route path="Menu3" element={<Menu3 />} />
            <Route path="Menu4" element={<Menu4 />} />
            <Route path="MyChatbot" element={<MyChatbot />} />
            <Route path="Faq" element={<Faq />} />
            <Route path="" element={<MainPage />} />
            <Route
              path="Modify/*"
              element={<Navigate replace to="../Modify/1" />}
            />
          </Route>
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
