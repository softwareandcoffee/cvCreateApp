import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./EducationsForm.scss";
import { useSelector } from "react-redux";

const EducationsForm: any = () => {
  const isCvStates = useSelector((state: any) => state?.cv?.userCV);

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header
            title={isCvStates ? "Güncelle" : "Yeni Oluştur"}
            />
        </IonHeader>
        EducationsForm
      </IonContent>
    </IonPage>
  );
};
export default EducationsForm;
