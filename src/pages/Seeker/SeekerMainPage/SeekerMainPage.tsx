import { IonContent, IonFooter, IonHeader, IonPage } from "@ionic/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCVFunc } from "../../../actions/cv";
import Footer from "../../../layouts/Footer/Footer";
import Header from "../../../layouts/Header/Header";

import "./SeekerMainPage.scss";
import CvBoxComponent from "./_partials/CvBoxComponent/cvBoxComponent";
import RecommendationJobsCart from "./_partials/RecommendationJobsCart/recommendationJobsCart";
import WelcomeCart from "./_partials/WelcomeCart/welcomeCart";

const SeekerMainPage: React.FC = () => {
  // Store States

  const dispatch: any = useDispatch();

  const loginState = useSelector((state: any) => state?.auth?.user);
  useEffect(() => {
    dispatch(getUserCVFunc(loginState?.email));
  }, []);

  return (
    <IonPage className="SeekerMainPage">
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent fullscreen={true}>
        <WelcomeCart />
        <CvBoxComponent />

        <RecommendationJobsCart />
      </IonContent>
      <IonFooter translucent={true}>{/* <Footer /> */}</IonFooter>
    </IonPage>
  );
};

export default SeekerMainPage;
