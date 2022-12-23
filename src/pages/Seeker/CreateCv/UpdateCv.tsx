import Header from "../../../layouts/Header/Header";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonInfiniteScrollContent,
  } from "@ionic/react";
  import "./CreateCv.scss";
  import {
    IonButton,
    IonLabel,
    IonItem,
    IonInput,
    IonList,
    IonSelect,
    IonSelectOption,
    IonRippleEffect,
  } from "@ionic/react";

const  UpdateCv: React.FC = () => {
    return(
        <IonPage >
        <IonContent>
        <IonHeader  >
          <Header />
          <div> Cv Güncelle</div>
        </IonHeader>

        </IonContent>
     
      
       </IonPage>
    )
}
export default UpdateCv;