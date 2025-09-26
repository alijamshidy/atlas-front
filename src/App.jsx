import { useState } from "react";
import Router from "./router/Router";
import AllRoutes from "./router/routes/AllRoutes";

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...AllRoutes]);

  return <Router allRoutes={allRoutes} />;
};

export default App;
