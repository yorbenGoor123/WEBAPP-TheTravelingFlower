import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "./routes/index";
import style from "./index.module.css"
import {useEffect} from 'react';
import {Switch,Route} from 'react-router-dom';
import uiStore from '../../../UiStore';
import Header from './containers/header/header';
import ProgressBar from "./containers/progressBar/progressBar";
import Personal from './containers/personal/personal';
import Button from "../../components/button/button";
import Congrats from '../../../assets/apply/congrats.svg';
import Bike from '../../../assets/apply/Bike.svg';
import Adres from './containers/adres/adres';
import Rout from './containers/route/route';
import Motivation from './containers/motivation/motivation';

function Apply() {


    useEffect(() => {
        uiStore.setPage("apply")
      });
  return (
  <>
  <div className = {style.container}>
  <div className = {style.container__wrapper}>
  <div className = {style.wrapper}>
  <div className = {style.progressWrapper}>
  <ProgressBar/>
  </div>
  <Switch>
  <Route path = {ROUTES.finished}>
  <div className = {style.underground}>
  <Header title = "Congratulations" text = "Congratulations ! Your registration was succesfull. You’ll get an email when you’re selected. Stay tuned !" img = {Congrats}/>
  <Button className = {style.button} value = "Back to home" type= "secondary"/>
  </div>
  </Route>
  <Route path = {ROUTES.motivation}>
  <div className = {style.underground}>
  <Header title = "Send us your motivation" text = "We have only 24 spots available for carriers in this program. So we want to know who’s the most motivated candidate to bring our Lady Slipper to Yushan (China). Send us a motivational video of max. 1 min. And tell us why you should get the spot in our campaign. " />
  <Motivation/>
  <Button className = {style.button} value = "Next Step" type= "secondary"/>
  </div>
  </Route>
  <Route path = {ROUTES.route}>
  <div className = {style.underground}>
  <Header title = "Choose Your Route" text = "You can choose 1 favourite route, you would like to do. It’s not certain if this is the route you’ll get, but we consider your favourite route. " />
  <Rout/>
  <Button className = {style.button} value = "Next Step" type= "secondary"/>
  </div>
  </Route>
  <Route path = {ROUTES.adres}>
  <div className = {style.underground}>
  <Header title = "Adress" text = "You're adress is save with us" />
  <Adres/>
  <Button className = {style.button} value = "Next Step" type= "secondary"/>
  </div>
  </Route>
  <Route path = {ROUTES.personal}>
  <div className = {style.underground}>
  <Header title = "Personal Information" text = "Once selected, we will need this to make a profile about you as a carrier."/>
  <Personal/>
  <Button className = {style.button} value = "Next Step" type= "secondary"/>
  </div>
  </Route>
  <Route path = {ROUTES.landing}>
  <div className = {style.underground}>
  <Header title = "Become a carrier" img = {Bike} />
  <Button className = {style.button} value = "Sign Up" type= "secondary"/>
  </div>
  </Route>
  </Switch>
  </div>
  </div>
  </div>
  </>
  );
}

export default Apply;
