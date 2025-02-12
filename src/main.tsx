import React from "react";
import ReactDOM from "react-dom/client";

//* LAYOUTS
import { MainLayout } from "@/layouts/main-layout";

//* PAGES
import { HomePage } from "@/pages/home-page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainLayout>
      <HomePage />
    </MainLayout>
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
