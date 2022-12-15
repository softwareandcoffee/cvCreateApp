import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonInput,
  IonItem,
  IonButton,
  IonText,
  IonInfiniteScrollContent,
  IonRippleEffect,
} from "@ionic/react";
import "./SeekerLogin.scss";
import { Route } from "react-router-dom";

const SeekerLogin: React.FC = () => {

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

        <div className="buttonCont">
          <Route
            render={({ history }) => (
              <IonButton
                shape="round"
                expand="block"
                onClick={() => {
                  history.push("/seekerMainPage");
                }}
              >
                Giriş Yap
              </IonButton>
            )}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SeekerLogin;
