import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FingerprintJs from "./componets/FingerprintJs";
import Inject from './componets/Inject';



createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="fingerprintjs" element={<FingerprintJs />} />
        <Route path="inject" element={<Inject />} />
      </Routes>
    </BrowserRouter>
    {/* <RouterProvider
      router={createBrowserRouter([
        {
          path: "/fingerprintjs",
          element: <FingerprintJs />,
        },
        {
          path: "/inject",
          element: <Inject />,
        },
      ])}
    /> */}
  </React.StrictMode>
);
