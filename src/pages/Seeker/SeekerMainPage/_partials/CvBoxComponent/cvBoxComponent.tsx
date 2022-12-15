import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router-dom";

import "./cvBoxComponent.scss";

const CvBoxComponent: React.FC = () => {
  const history=useHistory();
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
          <div className="btn" onClick={()=>history.push("/cv")}>Hemen Güncelle</div>
          <div className="cv-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default CvBoxComponent;
