import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./InterestsForm.scss";
import { useSelector } from "react-redux";

const InterestsForm: any = () => {
  const isCvStates = useSelector((state: any) => state?.cv?.userCV);

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header title={isCvStates ? "Güncelle" : "Yeni Oluştur"} />
        </IonHeader>
        InterestsForm
      </IonContent>
    </IonPage>
  );
};
export default InterestsForm;
