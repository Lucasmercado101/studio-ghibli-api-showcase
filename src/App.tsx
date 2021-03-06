import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Films from "./pages/Films/Films";
import Locations from "./pages/Locations/Locations";
import People from "./pages/People/People";
import Species from "./pages/Species/Species";
import Vehicles from "./pages/Vehicles/Vehicles";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { secondary } = useContext(ThemeContext);

  document.body.style.backgroundColor = secondary;

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Films />
        </Route>
        <Route exact path="/locations">
          <Locations />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        <Route exact path="/species">
          <Species />
        </Route>
        <Route exact path="/vehicles">
          <Vehicles />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
