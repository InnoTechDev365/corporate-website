import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Handle GitHub Pages SPA redirect (stored by 404.html)
const redirect = sessionStorage.getItem("spa_redirect");
if (redirect) {
  sessionStorage.removeItem("spa_redirect");
  if (redirect !== window.location.pathname + window.location.search + window.location.hash) {
    window.history.replaceState(null, "", redirect);
  }
}

createRoot(document.getElementById("root")!).render(<App />);
