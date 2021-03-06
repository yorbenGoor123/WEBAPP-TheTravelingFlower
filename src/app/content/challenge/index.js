import React from 'react';
import {useEffect} from 'react';
import uiStore from '../../../UiStore'
import Assignment from "./containers/assignment/assignment";
import Header from "./containers/header/header";
import Involvement from "./containers/involvement/involvement";
import Progress from "./containers/progress/progress";
import SocialFeed from "./containers/socialfeed/socialfeed";
import {Route,Switch} from "react-router-dom";
import FeedIcon from '../../../assets/challenge/feedIcon.svg'
import style from './index.module.css'
import PopupIcon from '../../components/popupIcon/popupIcon'
import uiChallenge from "./stores/uiStore";
import { useStore } from '../../../hooks';
import { useObserver } from 'mobx-react-lite';
import { rootStore } from '../../../stores';

function Challenge() {

  const {challengeStore} = useStore();
  challengeStore.setcurrentChallenge(challengeStore.challenges[0])

  console.log(challengeStore.currentChallenge.currentSum/challengeStore.currentChallenge.donationGoal);

    useEffect(() => {
        uiStore.setPage("challenge")
      });

      const handleOnClick = (e) => {
        uiChallenge.UIOut();
      }
  return useObserver(() => (
  <>
  <div className={style.challenge__container}>
  <Switch>

  <Route path = "/challenge">
  <div className = {style.popUP}>
  <PopupIcon icon = {FeedIcon} direction = "-1" text = "Social Feed" click = {handleOnClick}/>
  </div>
  <Header hashtags = {`#TheTravelingFlower ${challengeStore.currentChallenge.hashtag}`}/>
  <Assignment/>
  <div className={style.involvement__container}>
  <Involvement/>
  </div>
  <div className={style.progress}>
  {rootStore.routeStore.findRouteById(rootStore.challengeStore.challenges[0].routeId) ? (
      <>
      <Progress title="Distance untill next challenge" start={rootStore.routeStore.findRouteById(rootStore.challengeStore.challenges[0].routeId).startName} end={rootStore.routeStore.findRouteById(rootStore.challengeStore.challenges[0].routeId).endName} percentage="80"/>
      <Progress title="Challenge goal" start="$0" end={`€${challengeStore.currentChallenge.donationGoal}`} percentage={`${challengeStore.currentChallenge.currentSum/challengeStore.currentChallenge.donationGoal*100}`}/>
      </>
  ) : <p>Content not loaded because routes haven't been calculated...Go back to tracking page and wait for the checkpoints to load...</p>}


  </div>
  <SocialFeed/>
  </Route>
  </Switch>
  </div>
  
  </>
  ));
}

export default Challenge;
