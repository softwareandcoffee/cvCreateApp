import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonToggle,
} from "@ionic/react";
import React from "react";
import Header from "../../layouts/Header/Header";
import { useHistory } from "react-router-dom";
import "./Profile.scss";

const Profile: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage className="Profile">
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent class="content">
        <IonItem>
          <IonLabel>Kullanıcı Adı</IonLabel>
          <IonLabel>Mehmet Dilmen</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Dark Mode</IonLabel>
          <IonToggle slot="end" checked={false}></IonToggle>
        </IonItem>

        <div className="btn-area">
          <div className="logout-btn" onClick={()=>history.push('/SeekerAuth')}>Çıkış</div>
        </div>
      </IonContent>

      <div className="version">
        <div className="text">version 0.0.1</div>
      </div>
    </IonPage>
  );
};

export default Profile;
