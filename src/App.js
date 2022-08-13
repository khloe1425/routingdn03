import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import DemoUseState from './pages/DemoHook/DemoUseState';
import DemoReduxHook from './pages/DemoHook/DemoReduxHook';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import DemoUseEffect from './pages/DemoHook/DemoUseEffect';
import AxiosRCC from './pages/Phim/AxiosRCC';
import AxiosRFC from './pages/Phim/AxiosRFC';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
       
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/usestate" component={DemoUseState} />
        <Route exact path="/reduxhook" component={DemoReduxHook} />
        <Route exact path="/useeffect" component={DemoUseEffect} />
        <Route exact path="/axiosrcc" component={AxiosRCC} />
        <Route exact path="/axiosrfc" component={AxiosRFC} />
        

        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
