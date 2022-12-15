import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../../layouts/Header/Header";

import "./SeekerMainPage.scss";
import CvBoxComponent from "./_partials/CvBoxComponent/cvBoxComponent";
import RecommendationJobsCart from "./_partials/RecommendationJobsCart/recommendationJobsCart";
import WelcomeCart from "./_partials/WelcomeCart/welcomeCart";

const SeekerMainPage: React.FC = () => {
  return (
    <IonPage className="SeekerMainPage">
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent>
        <WelcomeCart />
        <CvBoxComponent />

        <RecommendationJobsCart />
      </IonContent>
    </IonPage>
  );
};

export default SeekerMainPage;
