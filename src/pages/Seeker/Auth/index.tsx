import {
  IonContent,
  IonHeader,
  IonPage,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
  IonSlides,
  IonSlide,
} from "@ionic/react";
import { useState } from "react";

import "./index.scss";
import SeekerLogin from "./Login/SeekerLogin";
import SeekerRegister from "./Register/SeekerRegister";

const SeekerAuth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <IonPage className="index-auth">
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonSegment>
              <IonSegmentButton
                value="default"
                onClick={() => setIsLogin(true)}
              >
                <IonLabel>Giriş Yap</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                value="segment"
                onClick={() => setIsLogin(false)}
              >
                <IonLabel>Kayıt Ol</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        </IonHeader>

        <IonSlides>
          {isLogin ? (
            <IonSlide>
              <SeekerLogin />
            </IonSlide>
          ) : (
            <IonSlide>
              <SeekerRegister />
            </IonSlide>
          )}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default SeekerAuth;
