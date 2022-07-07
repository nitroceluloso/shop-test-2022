import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/variables.css";
import "./assets/css/base.css";

import Counters from "./layouts/counters";

const App = () => <Counters />;

const domRoot = document.getElementById("root");
const root = createRoot(domRoot);
root.render(<App />);
