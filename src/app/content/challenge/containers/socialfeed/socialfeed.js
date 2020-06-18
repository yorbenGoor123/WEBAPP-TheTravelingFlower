import React from 'react';
import close from "../../../../../assets/feed/close.svg"
import FeedHeader from "../../components/feedHeader/feedHeader";
import Post from "../../components/post/post"
import SocialExample from "../../../../../assets/feed/post/social symbols/twitter.svg"
import ProfileExample from "../../../../../assets/feed/post/profile pics/example.svg"
import ContentExample from "../../../../../assets/feed/post/content pics/example.png"
import uiChallenge from "../../stores/uiStore";
import style from "./socialfeed.module.css";
import { useObserver } from 'mobx-react-lite';

function SocialFeed() {
  const handleOnClick = (e) => {
    uiChallenge.UIIn();
  }
  return useObserver(() => (
  <>
  <div className = {( uiChallenge.uiOut ? `${style.container} ${style.positionIn}` : `${style.container} ${style.positionOut}` ) }>
  <img onClick = {e => handleOnClick()} className = {style.close} src = {close} alt = "close"/>
  <FeedHeader hashtags = "#TravelingFlower #FlowerAmsterdamTF"/>
  <div className = {style.postWrapper}>
  <Post pic = {ProfileExample} user = "Johnny Bravo" social = {SocialExample} text = "Ik ben een chad die graag kookt en eten klaar maakt" content = {ContentExample} />
  <Post pic = {ProfileExample} user = "Johnny Bravo" social = {SocialExample} text = "Ik ben een chad" content = {ContentExample} />
  </div>
  </div>
  </>
  ));
}

export default SocialFeed;