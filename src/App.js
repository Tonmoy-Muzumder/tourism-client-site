import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import AddNewPlan from './pages/AddNewPlan/AddNewPlan';
import Plans from './pages/Plans/Plans';
import Booking from './pages/Booking/Booking';

function App() {
  return (
    <div className="App">

    <AuthProvider>
     <Router>
     <Header></Header>
       <Switch>
         <Router exact path="/">
           <Home></Home>
         </Router>
         
         <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/plans">
            <Plans></Plans>
          </Route>

          <Route path="/login">
              <Login></Login>
          </Route>

          <Route path="/booking/:id">
           <Booking></Booking>
          </Route>

          <Route path="/addnewplan">
              <AddNewPlan></AddNewPlan>
          </Route>

          <Router path="*">
            <NotFoundPage></NotFoundPage>
          </Router>
       </Switch>
       <Footer></Footer>
     </Router>
    </AuthProvider>
      
    </div>
  );
}

export default App;
