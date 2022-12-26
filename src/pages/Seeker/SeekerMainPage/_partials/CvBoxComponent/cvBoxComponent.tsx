import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./cvBoxComponent.scss";

const CvBoxComponent: React.FC = () => {
  // Store States
  const isCvStates = useSelector((state: any) => state?.cv);
  const history = useHistory();
  return (
    <div className="CvBoxComponent">
      {isCvStates?.length ? (
        <div className="container">
          <div className="isNoCv">
            <div className="title">Henüz bir cv oluşturmadın.</div>
            <div className="btn" onClick={() => history.push("/MenuCart")}>
              Hemen Oluştur
            </div>
            <div className="cv-icon"></div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="isNoCv">
            <div className="title">CV'in hala güncel mi ?</div>
            <div className="btn" onClick={() => history.push("/MenuCart")}>
              Hemen Güncelle
            </div>
            <div className="cv-icon"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CvBoxComponent;
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
