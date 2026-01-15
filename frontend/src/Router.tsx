import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import ProfilePage from "./pages/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:userId" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
