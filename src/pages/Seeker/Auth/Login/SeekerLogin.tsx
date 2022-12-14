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
          <IonButton shape="round" expand="block">
            Giriş Yap
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SeekerLogin;
