import "@radix-ui/themes/styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Theme } from "@radix-ui/themes";
import { TodoContextProvider } from "./context/todoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoContextProvider>
      <Theme>
        <App />
      </Theme>
    </TodoContextProvider>
  </StrictMode>
);
