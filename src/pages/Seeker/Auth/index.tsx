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
  IonButton,
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
          <div className="seg-content">
            {isLogin ? (
              <>
                {" "}
                <div
                  className="segment-btn-new segment-btn-new-selected"
                  onClick={() => setIsLogin(true)}
                >
                  Giriş Yap
                </div>
                <div
                  className="segment-btn-new"
                  onClick={() => setIsLogin(false)}
                >
                  Kayıt Ol
                </div>{" "}
              </>
            ) : (
              <>
                <div
                  className="segment-btn-new"
                  onClick={() => setIsLogin(true)}
                >
                  Giriş Yap
                </div>
                <div
                  className="segment-btn-new segment-btn-new-selected"
                  onClick={() => setIsLogin(false)}
                >
                  Kayıt Ol
                </div>{" "}
              </>
            )}
          </div>
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
