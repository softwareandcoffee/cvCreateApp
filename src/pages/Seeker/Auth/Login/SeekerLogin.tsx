import {
  IonContent,
  IonPage,
  IonList,
  IonLabel,
  IonInput,
  IonItem,
  IonInfiniteScrollContent,
  IonRippleEffect,
} from "@ionic/react";

import "./SeekerLogin.scss";
import { useHistory } from "react-router-dom";

const SeekerLogin: React.FC = () => {

  const history = useHistory();
  return (
    <IonPage className="SeekerRegisterPage">
      <IonContent>
        <IonInfiniteScrollContent>
          <IonList>
            <IonItem class="custom-item">
              <IonLabel position="stacked">Email </IonLabel>
              <IonInput type="email"></IonInput>
            </IonItem>

            <IonItem class="custom-item">
              <IonLabel position="stacked">Şifre</IonLabel>

              <IonInput type="password"></IonInput>
            </IonItem>

            <div className="ion-activatable ripple-parent rounded-rectangle">
              <IonRippleEffect></IonRippleEffect>
            </div>
          </IonList>
        </IonInfiniteScrollContent>

        <div className="button-container">
          <div className="lgn-btn" onClick={() => history.push('/seekerMainPage')}>Giriş Yap</div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SeekerLogin;
