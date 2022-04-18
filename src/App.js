import {BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import './App.css'
import Navbar from './components/Navbar';
function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
     <Route exact path='/'>
          <Dashboard/>
       </Route>
      <Route exact path='/register'>
          <Register/>
       </Route>
       <Route exact path='/login'>
          <Login/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
