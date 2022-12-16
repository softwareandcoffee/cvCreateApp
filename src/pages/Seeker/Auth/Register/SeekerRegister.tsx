import {
  IonContent,
  IonPage,
  IonInfiniteScrollContent,
  IonImg,
} from "@ionic/react";
import "./SeekerRegister.scss";

import { IonButton, IonLabel, IonItem, IonInput, IonList } from "@ionic/react";

import { useHistory } from "react-router-dom";

const SeekerRegister: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage className="SeekerRegister">
      <IonContent>
        <IonInfiniteScrollContent>
          <div className="login-img">
            <IonImg src="assets/candidate.png" class="img"></IonImg>
          </div>
          <div className="login-text-container">
            <div className="text-login">Kayıt ol</div>
            <div className="text-login-second">
              Hemen kayıt ol CV'ni oluştur
            </div>
          </div>
          <IonList lines="full">
            <IonItem class="custom-item">
              <IonLabel position="stacked" className="label">
                İsim
              </IonLabel>
              <IonInput></IonInput>
            </IonItem>

            <IonItem class="custom-item">
              <IonLabel position="stacked">Soyisim</IonLabel>
              <IonInput></IonInput>
            </IonItem>

            <IonItem class="custom-item">
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput type="email"></IonInput>
            </IonItem>
            <IonItem class="custom-item">
              <IonLabel position="stacked"> Şifre </IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>
          </IonList>
        </IonInfiniteScrollContent>

        <div className="button-container">
          <div
            className="lgn-btn"
            onClick={() => history.push("/seekerMainPage")}
          >
            Tamamla
          </div>
        </div>

        <div className="button-container">
          <div
            className="register-btn"
            onClick={() => history.push("/seekerLogin")}
          >
            Zaten bir hesabım var
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SeekerRegister;
