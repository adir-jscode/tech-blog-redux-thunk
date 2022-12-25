import logo from "./logo.svg";
import "./App.css";
import { Route, RouterProvider, Routes } from "react-router-dom";
import routes from "./routes/routes";
import Home from "./pages/Main/Home";
import Dashboard from "./layout/Dashboard/Dashboard";
import Main from "./layout/Main/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
