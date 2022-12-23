import { IonContent, IonFooter, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../../layouts/Footer/Footer";
import Header from "../../../layouts/Header/Header";

import "./SeekerMainPage.scss";
import CvBoxComponent from "./_partials/CvBoxComponent/cvBoxComponent";
import RecommendationJobsCart from "./_partials/RecommendationJobsCart/recommendationJobsCart";
import WelcomeCart from "./_partials/WelcomeCart/welcomeCart";

const SeekerMainPage: React.FC = () => {
  // Store States
  const loginState = useSelector(
    (state: any) =>
      state?.auth?.user
  );
  console.log('login: ', loginState)
  return (
    <IonPage  className="SeekerMainPage">
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent fullscreen={true}>
        <WelcomeCart />
        <CvBoxComponent />

        <RecommendationJobsCart />
      </IonContent>
     <IonFooter translucent={true}>
     <Footer/>
     </IonFooter>
       
     
    </IonPage>
  );
};

export default SeekerMainPage;
