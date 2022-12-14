import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInfiniteScrollContent,
} from "@ionic/react";
import "./SeekerRegister.scss";

import {
  IonButton,
  IonLabel,
  IonItem,
  IonInput,
  IonList,
  IonRippleEffect,
} from "@ionic/react";
import { useState } from "react";

const SeekerRegister: React.FC = () => {
  const [click, setClick] = useState(false);

  return (
    <IonPage className="SeekerRegister">
      <IonContent>
        <IonInfiniteScrollContent>
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

        <div className="btn-container">
          <IonButton shape="round" className="btn-next">
            Devam
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SeekerRegister;
