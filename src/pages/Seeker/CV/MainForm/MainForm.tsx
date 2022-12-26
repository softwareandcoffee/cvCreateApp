import {
  IonContent,
  IonHeader,
  IonPage,
  IonInfiniteScrollContent,
} from "@ionic/react";
import "./MainForm.scss";
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
import Header from "../../../../layouts/Header/Header";
import { useSelector } from "react-redux";

const MainForm: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [click, setClick] = useState(false);

  const isCvStates = useSelector((state: any) => state?.cv?.userCV);

  return (
    <IonPage className="SeekerRegisterPage">
      <IonContent>
        <IonHeader collapse="condense">
          <Header title={isCvStates ? "Güncelle" : "Yeni Oluştur"} />
        </IonHeader>

        <IonList>
          <IonItem class="custom-item">
            <IonLabel position="stacked">İsim</IonLabel>
            <IonInput value={isCvStates?.name}></IonInput>
          </IonItem>

          <IonItem class="custom-item">
            <IonLabel position="stacked">Soyisim</IonLabel>
            <IonInput value={isCvStates?.surname}></IonInput>
          </IonItem>

          <IonItem class="custom-item">
            <IonLabel position="stacked">Email </IonLabel>
            <IonInput value={isCvStates?.email} type="email"></IonInput>
          </IonItem>

          <IonItem class="custom-item">
            <IonLabel position="stacked">Adres</IonLabel>
            <IonInput value={isCvStates?.adres}></IonInput>
          </IonItem>

          <IonItem class="custom-item">
            <IonLabel position="stacked">Telefon Numarası</IonLabel>
            <IonInput type="tel" value={isCvStates?.phone}></IonInput>
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
                <IonInput value={isCvStates?.driverLicance}></IonInput>
              </IonItem>
              <IonItem class="custom-item">
                <IonLabel position="stacked">Medeni Durum</IonLabel>
                <IonInput value={isCvStates?.martialStatus}></IonInput>
              </IonItem>
              <IonItem class="custom-item">
                <IonLabel position="stacked">Cinsiyet</IonLabel>
                <IonSelect
                  placeholder="Seçiniz"
                  selectedText={isCvStates?.gender}
                >
                  <IonSelectOption value="Erkek">Erkek</IonSelectOption>
                  <IonSelectOption value="Kadın">Kadın</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem class="custom-item">
                <IonLabel position="stacked">Doğum Tarihi</IonLabel>
                <IonInput type="date" value={isCvStates?.birthday}></IonInput>
              </IonItem>
            </IonList>
          ) : (
            click
          )}
        </IonList>
      </IonContent>
      <div className="buttonCont">
        <IonButton shape="round" expand="block">
          {isCvStates ? "Güncelle" : "Kaydet"}
        </IonButton>
      </div>
    </IonPage>
  );
};

export default MainForm;
