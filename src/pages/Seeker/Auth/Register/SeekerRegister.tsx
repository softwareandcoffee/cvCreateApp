import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInfiniteScrollContent
} from "@ionic/react";
import "./SeekerRegister.scss";
import {
  IonButton,
  IonLabel,
  IonItem,
  IonInput,
  IonList, IonSelect, IonSelectOption,
  IonRippleEffect,
} from "@ionic/react";
import { useState } from "react";

const SeekerRegister: React.FC = () => {
  const [click, setClick] = useState(false);
  return (
    <IonPage className="SeekerRegisterPage">
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            {/* <IonTitle>Kendinden Bahset</IonTitle> */}
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonItem>
            <IonLabel position="stacked">Email </IonLabel>
            <IonInput type="email"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Şifre</IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>

          <div className="ion-activatable ripple-parent rounded-rectangle">
            <IonRippleEffect></IonRippleEffect>
          </div>
        </IonList>

        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonContent>
      <div className="buttonCont">
        <IonButton shape="round" expand="block">Devam</IonButton>
      </div>
    </IonPage>
  );
};

export default SeekerRegister;
