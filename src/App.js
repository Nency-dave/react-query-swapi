import { Navbar } from "./components/Navbar";
import { Species } from "./components/Species";
import { Vehicles } from "./components/Vehicles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Planets } from "./components/Planets";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("vehicles");
  console.log(page, "app page");
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>RQ-SWAPI-APP</h1>

        {/* 

        <div className="content">
          {page == "vehicles" ? <Vehicles /> : <Species />}
        </div> */}

        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/other">Other</Link>
            </li>
          </ul>
          <Navbar setPage={setPage} />
          <Routes>
            <Route
              path="/"
              element={page == "vehicles" ? <Vehicles /> : <Species />}
            ></Route>
            <Route
              path="/other"
              element={page == "vehicles" ? <Vehicles /> : <Species />}
            ></Route>
          </Routes>
        </Router>

        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
