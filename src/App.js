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
import AxiosMiddleWare from './pages/Phim/AxiosMiddleWare';
import { HomeTemplate } from './templates/HomeTemplate';
import { Fragment } from "react";
import { UserTemplate } from './templates/UserTemplate';
import AndtDemo from './pages/Admin/AndtDemo';
import { AdminTemplate } from './templates/AdminTemplate';

function App() {
  return (
    <BrowserRouter>
      {/* Sẽ xuất hiện ở tất cả các trang */}
      {/* <Header /> */}
      <Switch>

        {/* propsRoute: history, match, back... */}
        {/* <Route exact path="/home" render={(propsRoute) => {
          return <div>
            <Header />
            <Home {...propsRoute} />
          </div>
        }} />
        <Route exact path="/contact" render={(propsRoute) => {
          return <div>     
            <Header />
            <Contact {...propsRoute} />
          </div>
        }} /> */}
        <HomeTemplate path="/home" component={Home}  />
        <HomeTemplate path="/contact" component={Contact}  />

        <Route exact path="/" render={(propsRoute) => {
          return <Fragment>
            {/* Header sẽ xuất hiện theo trang được quy định */}
            <Header />
            <Home {...propsRoute} />
          </Fragment>
        }} />
        {/* <Route exact path="/home" component={Home} /> */}
        {/* <Route exact path="/contact" component={Contact} /> */}
        {/* <Route exact path="/" component={Home} /> */}


        <UserTemplate path="/login" component={Login}/>
        <UserTemplate path="/register" component={Register}/>

        <AdminTemplate path="/admin/andtdemo" component={AndtDemo} />





        <Route exact path="/usestate" component={DemoUseState} />
        <Route exact path="/reduxhook" component={DemoReduxHook} />
        <Route exact path="/useeffect" component={DemoUseEffect} />
        <Route exact path="/axiosrcc" component={AxiosRCC} />
        <Route exact path="/axiosrfc" component={AxiosRFC} />
        <Route exact path="/axiosmiddleware" component={AxiosMiddleWare} />



      </Switch>
    </BrowserRouter>
  );
}

export default App;
