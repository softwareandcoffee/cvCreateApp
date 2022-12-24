import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./AboutForm.scss";

const AboutForm: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header />
        </IonHeader>
        AboutForm
      </IonContent>
    </IonPage>
  );
};
export default AboutForm;
