import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,

} from "@ionic/react";
import "./EmployerLogin.scss";

import { useState } from "react";

const EmployerLogin: React.FC = () => {
  const [click, setClick] = useState(false);
  return (
    <IonPage className="EmployerLogin">
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>EmployerLogin</IonTitle>
          </IonToolbar>
        </IonHeader>
        </IonContent>
    </IonPage>
  );
};

export default EmployerLogin;
