import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./MenuCart.scss";
import { IonLabel, IonItem } from "@ionic/react";
import { useHistory } from "react-router";

const MenuCart: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header />
        </IonHeader>
        <IonItem onClick={() => history.push("/MainForm")}>
          <IonLabel>Temel Bilgiler</IonLabel>
        </IonItem>
        <IonItem onClick={() => history.push("/AboutForm")}>
          <IonLabel>Hakkında</IonLabel>
        </IonItem>
        <IonItem onClick={() => history.push("/EducationsForm")}>
          <IonLabel>Eğitim Bilgileri</IonLabel>
        </IonItem>
        <IonItem onClick={() => history.push("/ExperienceForm")}>
          <IonLabel>İş Bilgileri</IonLabel>
        </IonItem>
        <IonItem onClick={() => history.push("/SkillsForm")}>
          <IonLabel>Beceri Bilgiler</IonLabel>
        </IonItem>
        <IonItem onClick={() => history.push("/HobiesForm")}>
          <IonLabel>Hobiler</IonLabel>
        </IonItem>
        <IonItem onClick={() => history.push("/ReferanceForm")}>
          <IonLabel>Referans Bilgileri</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
export default MenuCart;
