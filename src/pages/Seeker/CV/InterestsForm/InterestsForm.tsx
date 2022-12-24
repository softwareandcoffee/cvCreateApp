import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./InterestsForm.scss";

const InterestsForm: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header />
        </IonHeader>
        InterestsForm
      </IonContent>
    </IonPage>
  );
};
export default InterestsForm;
