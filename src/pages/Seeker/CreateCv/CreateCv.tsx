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
import { useState } from "react";
import Header from "../../../layouts/Header/Header";


const CreateCv: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [click, setClick] = useState(false);

  return (
    <IonPage className="SeekerRegisterPage">
      
    
   <IonContent>
            <IonHeader collapse="condense">
          <Header />
       
        </IonHeader>
     
     <IonList>
          <IonItem class="custom-item">
            <IonLabel position="stacked">İsim</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem class="custom-item">
            <IonLabel position="stacked">Soyisim</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem class="custom-item">
            <IonLabel position="stacked">Email </IonLabel>
            <IonInput type="email"></IonInput>
          </IonItem>

          <IonItem class="custom-item">
            <IonLabel position="stacked">Adres</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem class="custom-item">
            <IonLabel position="stacked">Telefon Numarası</IonLabel>
            <IonInput type="tel"></IonInput>
          </IonItem>
          <div className="ion-activatable ripple-parent rounded-rectangle">
            <IonRippleEffect></IonRippleEffect>
          </div>

          <IonButton
            style={{ marginTop: "20px" }}
            fill="outline"
            expand="block"
            onClick={() => setClick((click) => !click)}
          >
            + Ek Bilgiler
          </IonButton>
          {click ? (
            <IonList>
              <IonItem class="custom-item">
                <IonLabel position="stacked">Sürücü Ehliyeti</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem class="custom-item">
                <IonLabel position="stacked">Medeni Durum</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem class="custom-item">
                <IonLabel position="stacked">Cinsiyet</IonLabel>
                <IonSelect placeholder="Seçiniz">
                  <IonSelectOption value="man">Erkek</IonSelectOption>
                  <IonSelectOption value="woman">Kadın</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem class="custom-item">
                <IonLabel position="stacked">Doğum Tarihi</IonLabel>
                <IonInput type="date"></IonInput>
              </IonItem>
            </IonList>
          ) : (
            click
          )}
        </IonList> 
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonContent>
      <div className="buttonCont">
        <IonButton shape="round" expand="block">
          Devam
        </IonButton>
      </div> 
      <IonLabel>Syfa</IonLabel>
    </IonPage>
  );
};

export default CreateCv;
