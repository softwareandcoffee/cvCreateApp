import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import "./cvBoxComponent.scss";

const CvBoxComponent: React.FC = () => {
  return (
    <IonPage className="CvBoxComponent">
      <IonContent>
        <div className="container">
          <div className="isNoCv">
            <div className="title">Henüz bir cv oluşturmadın.</div>
            <div className="btn">Hemen Oluştur</div>
            <div className="cv-icon"></div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CvBoxComponent;
