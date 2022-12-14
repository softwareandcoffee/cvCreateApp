import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInfiniteScrollContent
  } from "@ionic/react";
  import "./SeekerRegister.scss";
  import {
    IonButton,
    IonLabel,
    IonItem,
    IonInput,
    IonList, IonSelect, IonSelectOption,
    IonRippleEffect,
    IonText ,
  } from "@ionic/react";
  import { useState } from "react";
  
  const cv: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [click, setClick] = useState(false);

    return (
      <IonPage className="SeekerRegisterPage">
        <IonContent>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle>Kendinden Bahset</IonTitle>
            </IonToolbar>
          </IonHeader>
  
          <IonList>
            <IonItem>
              <IonLabel position="stacked">İsim<IonText color="danger">*</IonText></IonLabel>
              <IonInput></IonInput>
            </IonItem>
  
            <IonItem>
              <IonLabel position="stacked">Soyisim<IonText color="danger">*</IonText></IonLabel>
              <IonInput></IonInput>
            </IonItem>
  
            <IonItem>
              <IonLabel position="stacked">Email <IonText color="danger">*</IonText></IonLabel>
              <IonInput type="email"></IonInput>
            </IonItem>
  
            <IonItem>
              <IonLabel position="stacked">Adres</IonLabel>
              <IonInput></IonInput>
            </IonItem>
  
            <IonItem>
              <IonLabel position="stacked">Telefon Numarası</IonLabel>
              <IonInput type="tel"></IonInput>
            </IonItem>
            <div className="ion-activatable ripple-parent rounded-rectangle">
          <IonRippleEffect></IonRippleEffect>
        </div>
  
  
  
            <IonButton style={{ marginTop: '20px' }} fill="outline" expand="block" onClick={() => setClick(click => !click)}>
              + Ek Bilgiler
            </IonButton>
            {click ?
              <IonList>
                <IonItem>
                  <IonLabel position="stacked">Sürücü Ehliyeti</IonLabel>
                  <IonInput></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Medeni Durum</IonLabel>
                  <IonInput></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Cinsiyet</IonLabel>
                  <IonSelect placeholder="Seçiniz">
                    <IonSelectOption value="man">Erkek</IonSelectOption>
                    <IonSelectOption value="woman">Kadın</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Doğum Tarihi</IonLabel>
                  <IonInput type="date"></IonInput>
                </IonItem>
              </IonList>
              :
              click
            }
  
  
          </IonList>
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonContent>
        <div className="buttonCont">
          <IonButton shape="round" expand="block">Devam</IonButton>
        </div>
      </IonPage>
    );
  };
  
  export default cv;
  