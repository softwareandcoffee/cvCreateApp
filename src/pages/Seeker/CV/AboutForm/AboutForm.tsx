import Header from "../../../../layouts/Header/Header";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTextarea,
  IonLabel,
} from "@ionic/react";
import "./AboutForm.scss";
import { useSelector } from "react-redux";

const AboutForm: any = () => {
  const isCvStates = useSelector((state: any) => state?.cv?.userCV);

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header title={isCvStates ? "*Hakkında" : " Hakkında"} />
        </IonHeader>

        <IonTextarea
          className="text-area"
          placeholder="Kendinden bahset :)"
          clearOnEdit={true}
        ></IonTextarea>
      </IonContent>
    </IonPage>
  );
};
export default AboutForm;
