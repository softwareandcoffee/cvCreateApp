import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./AboutForm.scss";
import { useSelector } from "react-redux";

const AboutForm: any = () => {
  const isCvStates = useSelector((state: any) => state?.cv?.userCV);

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header
            title={isCvStates ? "Güncelle" : "Yeni Oluştur"}
          />
        </IonHeader>
        AboutForm
      </IonContent>
    </IonPage>
  );
};
export default AboutForm;
