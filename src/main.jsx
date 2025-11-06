import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./ThemeContext"; // 👈 import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>   {/* 👈 Wrap kiya */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
