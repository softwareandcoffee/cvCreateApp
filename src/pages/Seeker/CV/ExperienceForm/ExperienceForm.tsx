import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./ExperienceForm.scss";
import { useSelector } from "react-redux";

const ExperienceForm: any = () => {
  const isCvStates = useSelector((state: any) => state?.cv?.userCV);

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header title={isCvStates ? "Güncelle" : "Yeni Oluştur"} />
        </IonHeader>
        ExperienceForm
      </IonContent>
    </IonPage>
  );
};
export default ExperienceForm;
