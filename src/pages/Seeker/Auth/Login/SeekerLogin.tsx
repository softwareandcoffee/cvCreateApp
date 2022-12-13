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
  IonButton
} from "@ionic/react";
import "./SeekerLogin.scss";

import { useState } from "react";

const SeekerLogin: React.FC = () => {
  const [click, setClick] = useState(false);
  return (
    <IonPage className="SeekerLogin">
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>SeekerLogin</IonTitle>
          </IonToolbar>
          </IonHeader>
          <IonList>

            <IonItem>
              <IonLabel position="stacked" >isim</IonLabel>
              <IonInput></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Soyisim</IonLabel>
              <IonInput></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Email </IonLabel>
              <IonInput type="email"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked"> Şifre </IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>


          </IonList>

          <IonButton shape="round" expand="block">Devam</IonButton>



       
      </IonContent>
    </IonPage>
  );
};

export default SeekerLogin;
