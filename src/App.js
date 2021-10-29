import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
function App() {
  return (
    <div className="App">

     <Router>
     <Header></Header>
       <Switch>
         <Router exact path="/">
           <Home></Home>
         </Router>
         
         <Route path="/home">
            <Home></Home>
          </Route>
       </Switch>
       <Footer></Footer>
     </Router>
      
    </div>
  );
}

export default App;
