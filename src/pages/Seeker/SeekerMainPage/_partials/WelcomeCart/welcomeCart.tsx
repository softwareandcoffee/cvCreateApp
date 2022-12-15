import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import "./welcomeCart.scss";

const WelcomeCart: React.FC = () => {
  return (
    <div className="WelcomeCart">
      <div className="container">
        <div className="cart">
          <div className="title">Günaydın, Sena Nur Ertürk.</div>
          <div className="btn">Bugün Nasılsın ?</div>
          <div className="morning-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCart;
