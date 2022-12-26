import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./ReferanceForm.scss";
import { useSelector } from "react-redux";

const ReferanceForm: any = () => {
  const isCvStates = useSelector((state: any) => state?.cv?.userCV);

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header title={isCvStates ? "Güncelle" : "Yeni Oluştur"} />
        </IonHeader>
        ReferanceForm
      </IonContent>
    </IonPage>
  );
};
export default ReferanceForm;
