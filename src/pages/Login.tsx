import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonIcon,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonAvatar,
} from "@ionic/react";
import { star } from "ionicons/icons";
import { useState } from "react";

import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState(false);
  const [person, setPerson] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="Login" fullscreen>
     
        <IonRow>
        <IonItem>
          <IonCol>
          <IonAvatar slot="start">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
       
          </IonCol>
          </IonItem>
       
        </IonRow>
        
        <IonRow>
          <IonCol>
            <IonList>
              <IonItem>
                <IonLabel position="stacked"> Email</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Şifre</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
              </IonItem>{" "}
            </IonList>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton expand="block">Login</IonButton>
            <p style={{ fontSize: "medium" }}>
              Don't have an account? <a href="#">Sign up!</a>
            </p>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;
