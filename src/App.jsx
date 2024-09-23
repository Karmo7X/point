import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import load from "../loading.json"
import Lottie from "lottie-react";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Servs = React.lazy(() => import("./pages/Services/Servs"));
const Employment = React.lazy(() => import("./pages/Employment/Employment"));
const Who = React.lazy(() => import("./pages/Who/Who"));
const Phil = React.lazy(() => import("./pages/Philsophy/Phil"));
const Creations = React.lazy(() => import("./pages/Creations/Creations"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            {" "}
            <Lottie
              // className="loti"
              animationData={load}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50% , -50%)",
                width: "350px",
              }}
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servs" element={<Servs />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/who" element={<Who />} />
          <Route path="/phil" element={<Phil />} />
          <Route path="/creations" element={<Creations />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
