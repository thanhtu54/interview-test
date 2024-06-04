import { Route, Routes } from "react-router-dom";
import ContactPage from "./components/contact";
import ListPage from "./components/list";
import Login from "./components/login";
import ManagementGroupPage from "./components/management";
import NotFound from "./components/not-found";
import OpportunitesPage from "./components/opportunites";
import TaskPage from "./components/task";
import PrivateRoutes from "./utils/privateRoutes";
import PublicRoutes from "./utils/publicRoutes";
import "./styles/index.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes />} path="/">
          <Route>
            <Route path="/" element={<ManagementGroupPage />} />
            <Route path="/management" element={<ManagementGroupPage />}>
              <Route path="/management" element={<ContactPage />} />
              <Route path="/management/contact" element={<ContactPage />} />
              <Route path="/management/task" element={<TaskPage />} />
              <Route path="/management/list" element={<ListPage />} />
              <Route
                path="/management/opportunites"
                element={<OpportunitesPage />}
              />
            </Route>
            <Route path="/profile" element={<NotFound />} />
            <Route path="/group" element={<NotFound />} />
            <Route path="/choose" element={<NotFound />} />
            <Route path="/people" element={<NotFound />} />
            <Route path="/grade" element={<NotFound />} />
            <Route path="/write" element={<NotFound />} />
            <Route path="/star" element={<NotFound />} />
            <Route path="/upload" element={<NotFound />} />
            <Route path="/bottle" element={<NotFound />} />
            <Route path="/electric" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
