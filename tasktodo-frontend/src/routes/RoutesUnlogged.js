import {
  Routes,
  Route
} from "react-router-dom";
import ViewFormLogin from "../components/views/ViewFormLogin";

// Routes for Admin User
const RoutesUnlogged = () => {

  //Render
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ViewFormLogin/>} />
      </Routes>
    </>
  );
};

export default RoutesUnlogged;