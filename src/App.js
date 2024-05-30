import { BrowserRouter, Routes, Route } from "react-router-dom";
import Business from "./Components/Business.js";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sports from "./Components/Sports.js";
import NewsComponents from "./Components/NewsComponents";

import Technology from "./Components/Technology.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <NewsComponents
                t="Top Headlines..."
                url={
                  "https://newsapi.org/v2/top-headlines?country=in&apiKey=e2229fe3c5084c318023a9ca0e808d17&pageSize=9&page="
                }
                title="- Home"
              />
            }
          ></Route>

          <Route path="/business" element={<Business />}></Route>
          <Route path="/sports" element={<Sports />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
