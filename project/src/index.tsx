import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeVersion } from "./screens/HomeVersion";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomeVersion />
  </StrictMode>,
);
