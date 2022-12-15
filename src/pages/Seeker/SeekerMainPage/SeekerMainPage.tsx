import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import "./SeekerMainPage.scss";
import CvBoxComponent from "./_partials/CvBoxComponent/cvBoxComponent";
import WelcomeCart from "./_partials/WelcomeCart/welcomeCart";

const SeekerMainPage: React.FC = () => {
  return (
    <IonPage className="SeekerMainPage">
      <IonContent>
        <WelcomeCart />
        <CvBoxComponent />
      </IonContent>
    </IonPage>
  );
};

export default SeekerMainPage;
