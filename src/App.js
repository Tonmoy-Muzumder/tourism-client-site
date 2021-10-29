import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import NotFoundPage from './NotFound/NotFoundPage';
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

          <Route path="/login">
              <Login></Login>
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
