import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import "./cvBoxComponent.scss";

const CvBoxComponent: React.FC = () => {
  return (
    <div className="CvBoxComponent">
      <div className="container">
        <div className="isNoCv">
          <div className="title">Henüz bir cv oluşturmadın.</div>
          <div className="btn">Hemen Oluştur</div>
          <div className="cv-icon"></div>
        </div>
      </div>

      <div className="container">
        <div className="isNoCv">
          <div className="title">CV'in hala güncel mi ?</div>
          <div className="btn">Hemen Güncelle</div>
          <div className="cv-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default CvBoxComponent;
