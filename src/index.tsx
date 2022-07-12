import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/variables.css";
import "./assets/css/base.css";

import Counters from "./layouts/counters";
import { NetworkProvider } from "./contexts/network/NetworkProvider";
import { ReactQueryDevtools } from "react-query/devtools";

const App = () => (
    <NetworkProvider>
        <Counters />
        <ReactQueryDevtools initialIsOpen={false} />
    </NetworkProvider>
);

const domRoot = document.getElementById("root");
const root = createRoot(domRoot);
root.render(<App />);
