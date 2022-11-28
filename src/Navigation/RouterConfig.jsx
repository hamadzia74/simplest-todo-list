/** @format */

import { Routes, Route } from "react-router-dom";
import PublicRoute from "./Routes/PublicRoute";
import WEB_PAGES from "../pages";
import PATH from "../utils/path";

function RouterConfig() {
  return (
    <Routes>
       <Route
        path={PATH.TODOLIST}
        element={<PublicRoute element={<WEB_PAGES.TODOLIST.INDEX />} />}
      />
      {/* AUTH ROUTES START */}
      <Route
        path={PATH.TODOLIST}
        element={<PublicRoute element={<WEB_PAGES.TODOLIST.INDEX />} />}
      />

  
     
      <Route path={PATH.NOPAGE} element={<WEB_PAGES.NO_PAGE_FOUND />} />
    </Routes>
  );
}

export default RouterConfig;
