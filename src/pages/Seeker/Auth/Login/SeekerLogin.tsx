import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,

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
        </IonContent>
    </IonPage>
  );
};

export default SeekerLogin;
