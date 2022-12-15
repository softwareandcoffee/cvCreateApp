import { IonIcon } from "@ionic/react";
import React from "react";
import { chevronBack, cloudDownload, personCircle } from "ionicons/icons";

import "./Header.scss";
import { useHistory } from "react-router-dom";

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <div className="Header">
      <div className="container">
        {/* <div className="left"> */}
        {/* <IonIcon icon={chevronBack} class="size"></IonIcon> */}
        {/* </div> */}
        <div className="logo">BenimCV</div>
        <div className="right">
          <IonIcon icon={cloudDownload} class="size"></IonIcon>

          <IonIcon
            icon={personCircle}
            onClick={() => history.push("/Profile")}
            class="size spacer-icons"
          ></IonIcon>
        </div>
      </div>
    </div>
  );
};

export default Header;
