import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore'
import ChallengeText from '../challenge/components/challengeText/challengeText';
import icon from '../../../assets/challenge/flag.svg'
import flag from "../../../assets/challenge/flag.svg";

function Carriers() {
    useEffect(() => {
        uiStore.setPage("carriers")
      });
  return (
  <>
  <div>
  <p> Carriers page </p>
  </div>
  </>
  );
}

export default Carriers;
