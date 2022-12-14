import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonInput,
  IonItem,
  IonButton,   
  IonText,     
  IonInfiniteScrollContent,   
} from "@ionic/react";
import "./SeekerLogin.scss";



const SeekerLogin: React.FC = () => {

  return (
    <IonPage className="SeekerLogin">
      <IonContent>
        
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>SeekerLogin</IonTitle>
          </IonToolbar>
          </IonHeader>
         
          <IonList lines="full" >

            <IonItem>
              <IonLabel position="stacked" >isim <IonText color="danger">*</IonText></IonLabel>
              <IonInput></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Soyisim <IonText color="danger">*</IonText></IonLabel>
              <IonInput></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked"  >Email  <IonText color="danger">*</IonText> </IonLabel>
              <IonInput type="email"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked"> Şifre  <IonText color="danger">*</IonText></IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>


          </IonList>
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
          <div className="buttonCont">
          <IonButton shape="round" expand="block">Giriş Yap</IonButton>
        </div>



       
      </IonContent>
    </IonPage>
  );
};
   
  

  
export default SeekerLogin;


