import Header from "./conponemt/Header";
import DayList from "./conponemt/DayList";
import Day from "./conponemt/Day";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./conponemt/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>

          <Route path="/day/:day">
          <Day />
          </Route>
          <Route>
            <EmptyPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
