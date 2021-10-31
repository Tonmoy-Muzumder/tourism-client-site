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
import Blogs from './pages/Blogs/Blogs';
import Booking from './pages/Booking/Booking';
import PrivateRoute from '../src/pages/Login/PrivateRoute/PrivateRoute'
import MyPlans from './pages/MyPlans/MyPlans';
import ManagePlans from './pages/ManagePlans/ManagePlans';

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

          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>

          <Route path="/aboutUs">
            <Plans></Plans>
          </Route>

          <Route path="/login">
              <Login></Login>
          </Route>

          <PrivateRoute path="/booking/:id">
           <Booking></Booking>
          </PrivateRoute>

          <Route path="/addnewplan">
              <AddNewPlan></AddNewPlan>
          </Route>

          <Route path="/myplans">
              <MyPlans></MyPlans>
          </Route>

          <Route path="/managePlans">
              <ManagePlans></ManagePlans>
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
