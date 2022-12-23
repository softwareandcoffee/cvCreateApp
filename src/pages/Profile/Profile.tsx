import {
  IonButton,
  IonContent,
  IonFooter,
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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";
import Footer from "../../layouts/Footer/Footer";

const Profile: React.FC = () => {
  const history = useHistory();
  const dispatch: any = useDispatch();

  const loginState = useSelector((state: any) => state?.auth?.user);

  const logoutHandle = () => {
    dispatch(logout());
    history.push("/Home");
  };
  return (
    <IonPage className="Profile" >
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent class="content" fullscreen={true}>
        <IonItem class="custom-item">
          <IonLabel>Kullanıcı Adı</IonLabel>
          <IonLabel>{loginState?.username}</IonLabel>
        </IonItem>
        <IonItem class="custom-item">
          <IonLabel>E-Posta</IonLabel>
          <IonLabel>{loginState?.email}</IonLabel>
        </IonItem>
        <IonItem class="custom-item">
          <IonLabel >Dark Mode</IonLabel>
          <IonToggle slot="end" checked={false}></IonToggle>
        </IonItem>

        <div className="btn-area">
          <div className="logout-btn" onClick={logoutHandle}>
            Çıkış
          </div>
        </div>
      </IonContent>

      <div className="version">
        <div className="text">version 0.0.1</div>
      </div>
      <IonFooter translucent={true}>
     <Footer/>
  

     </IonFooter>
    </IonPage>
  );
};

export default Profile;
