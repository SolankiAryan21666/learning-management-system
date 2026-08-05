import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { appStore } from "./app/store";
import { Toaster } from "@/components/ui/toast";
import AppLoader from "./components/AppLoader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <AppLoader>
        <App />
      </AppLoader>
      <Toaster />
    </Provider>
  </StrictMode>,
);
