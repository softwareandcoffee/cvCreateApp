import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../layouts/Header/Header";

import "./Profile.scss";

const Profile: React.FC = () => {
  return (
    <IonPage className="Profile">
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent>Profile</IonContent>
    </IonPage>
  );
};

export default Profile;
