import {
  IonContent,
  IonPage,
  IonList,
  IonLabel,
  IonInput,
  IonItem,
  IonInfiniteScrollContent,
  IonRippleEffect,
  IonImg,
} from "@ionic/react";

import "./SeekerLogin.scss";
import { useHistory } from "react-router-dom";

const SeekerLogin: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent className="SeekerLoginPage">
        <div className="login-img">
          <IonImg src="assets/candidate.png" class="img"></IonImg>
        </div>
        <div className="login-text-container">
          <div className="text-login">Giriş yap</div>
          <div className="text-login-second">Hemen giriş yap CV'ni oluştur</div>
        </div>

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
          <div
            className="lgn-btn"
            onClick={() => history.push("/seekerMainPage")}
          >
            Giriş Yap
          </div>
        </div>

        <div className="button-container">
          <div
            className="register-btn"
            onClick={() => history.push("/seekerRegister")}
          >
            Kayıt Ol
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SeekerLogin;
