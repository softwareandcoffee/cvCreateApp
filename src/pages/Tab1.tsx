import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import {
  IonButton,
  IonLabel,
  IonItem,
  IonInput,
  IonList,
  IonImg,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { useState } from "react";

const Tab1: React.FC = () => {
  const [click, setClick] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kişisel Bilgiler</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonImg
          style={{ innerHeight: "100px", width: "120px" }}
          className="img"
          src="https://i.hizliresim.com/8qzvghb.jpg"
          alt="user"
        ></IonImg>
        <ExploreContainer name="Tab 1 page" />

        <IonList>
          <IonItem>
            <IonLabel position="stacked">isim</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Soy isim</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Email </IonLabel>
            <IonInput type="email"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Adres</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Posta Kodu</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Telefon Numarası</IonLabel>
            <IonInput type="tel"></IonInput>
          </IonItem>

         

          <IonButton expand="block" onClick={() => setClick(click => !click)}>
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
              <IonSegment value="man">
                <IonSegmentButton value="default">
                  <IonLabel>Erkek</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="woman">
                  <IonLabel>Kadın</IonLabel>
                </IonSegmentButton>
              </IonSegment>
              <IonItem>
                <IonLabel position="stacked">Linkedin</IonLabel>
                <IonInput></IonInput>
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
        <div className="buton">
          <IonButton shape="round">devam</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
