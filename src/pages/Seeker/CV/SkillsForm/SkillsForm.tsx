import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./SkillsForm.scss";
import { useSelector } from "react-redux";

const SkillsForm: any = () => {
  const isCvStates = useSelector((state: any) => state?.cv?.userCV);

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header title={isCvStates ? "Güncelle" : "Yeni Oluştur"} />
        </IonHeader>
        SkillsForm
      </IonContent>
    </IonPage>
  );
};
export default SkillsForm;
