import { Route } from "react-router-dom";
import "./App.css";

import Auth from "./Componenet/AuthForm/Auth";
import Welcome from "./Componenet/Page/WelcomePage";

function App() {
  return (
    <div>
      <Route exact path='/'>
      <Auth />
      </Route>
   
      <Route path='/welcome'>
        <Welcome />
      </Route>
    </div>
  );
}

export default App;
