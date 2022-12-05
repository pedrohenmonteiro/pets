import { BrowserRouter } from "react-router-dom";
import { AuthStorage } from "./contexts/AuthContext";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <AuthStorage>
        <Router />
      </AuthStorage>
    </BrowserRouter>
  );
}

export default App;
