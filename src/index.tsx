import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientJs from "./components/ClientJs";
import FingerprintJs from "./components/FingerprintJs";
import ImprintJs from "./components/ImprintJs";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="fingerprintjs" element={<FingerprintJs />} />
        <Route path="clientjs" element={<ClientJs />} />
        <Route path="imprintjs" element={<ImprintJs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
