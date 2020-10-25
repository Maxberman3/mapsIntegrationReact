import React, {useState} from "react";
import {Switch, Route} from "react-router-dom";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Results from "./components/Results";
import Details from "./components/Details";

function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const notify = message => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };
  const [xid, setXid] = useState(null);
  const [places, setPlaces] = useState(null);
  return (
    <div>
      <Banner />
      <Notify errorMessage={errorMessage} />
      <Switch>
        <Route path="/results">
          <Results places={places} setXid={setXid} />
        </Route>
        <Route path="/details">
          <Details xid={xid} notify={notify} />
        </Route>
        <Route path="">
          <Search setPlaces={setPlaces} notify={notify} />
        </Route>
      </Switch>
    </div>
  );
}
const Notify = ({errorMessage}) => {
  if (!errorMessage) {
    return null;
  }
  return <div style={{color: "red"}}>{errorMessage}</div>;
};

export default App;
