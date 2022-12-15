import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import "./SeekerMainPage.scss";
import CvBoxComponent from "./_partials/CvBoxComponent/cvBoxComponent";

const SeekerMainPage: React.FC = () => {
  return (
    <IonPage className="SeekerMainPage">
      <IonContent>
        <CvBoxComponent />
      </IonContent>
    </IonPage>
  );
};

export default SeekerMainPage;
