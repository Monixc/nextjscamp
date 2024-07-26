import { Route, Routes, Link } from "react-router-dom";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Write from "../pages/Write";

const Router = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          {" "}
          <Link to="/write">write</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
};
export default Router;
