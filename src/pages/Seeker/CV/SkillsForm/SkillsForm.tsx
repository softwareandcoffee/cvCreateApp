import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./SkillsForm.scss";

const SkillsForm: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header />
        </IonHeader>
        SkillsForm
      </IonContent>
    </IonPage>
  );
};
export default SkillsForm;
