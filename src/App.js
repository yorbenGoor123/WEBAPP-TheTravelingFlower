import React from 'react';
import ROUTES from './routes'
import Apply from "./app/content/apply";
import Landing from "./app/content/landing"
import Tracker from './app/content/tracker'
import Challenge from "./app/content/challenge"
import Carriers from "./app/content/carriers"
import Settings from './app/content/settings'
import Sidebar from './app/content/sidebar'
import rootStore from "./stores/index";
import uiStore from './UiStore'
import { Switch, Route } from "react-router-dom";
import {useObserver} from 'mobx-react-lite';
import style from './app.module.css'

function App() {
  return useObserver(() => (
  <>
  <div className = {style.container}>
  {
     (uiStore.sidebarActive ?
   <Sidebar/>
   : 
    <>
    </>
     )
}
   <h1 className = {style.hidden}>The traveling flower</h1>
   <Switch>
   <Route path = {ROUTES.apply}>
   <Apply/>
   </Route>
   <Route path = {ROUTES.tracker}>
   <Tracker/>
   </Route>
   <Route path = {ROUTES.challenge}>
   <Challenge/>
   </Route>
   <Route path = {ROUTES.carriers}>
   <Carriers/>
   </Route>
   <Route path = {ROUTES.settings}>
   <Settings/>
   </Route>
    <Route path = {ROUTES.landing}>
   <Landing/>
   </Route>
   </Switch>
   </div>
   </>
  ));
}

export default App;
