import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,

} from "@ionic/react";
import "./EmployerRegister.scss";

import { useState } from "react";

const EmployerRegister: React.FC = () => {
  const [click, setClick] = useState(false);
  return (
    <IonPage className="EmployerRegister">
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

export default EmployerRegister;
