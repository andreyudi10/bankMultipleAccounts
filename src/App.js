import React,{ useState } from 'react';
import Home from './pages/Home';
import DetailBank from './pages/DetailBank';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {  
  const [data] = useState([{andri:1},{yudi:3}])    
  // display account list account number, curency, balance, last transaction date
  // value date, curency , debit, credit, transaction narative  



  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <DetailBank data={data}/>
        </Route>
        <Route exact path="/" >
          <Home data={data}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
