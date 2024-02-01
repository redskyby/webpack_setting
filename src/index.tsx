import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import React from "react";

const root = document.getElementById("root");

if (!root) {
    throw new Error("root not found");
}

const container = createRoot(root);

container.render(<App />);
