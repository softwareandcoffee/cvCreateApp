import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { getWelcomeMessage } from "../../../../../helpers/wel-cart";

import "./welcomeCart.scss";

const WelcomeCart: React.FC = () => {
  const [welcartType, setWelcartType] = useState("morning");

  useEffect(() => {
    const res: any = getWelcomeMessage();
    console.log('res: ', res);
    setWelcartType(res?.type);
  }, []);

  return (
    <div className="WelcomeCart">
      <div className="container">
        <div className="cart">
          {welcartType === "morning" ? (
            <>
              <div className="title">Günaydın, Sena Nur Ertürk.</div>
              <div className="btn">Bugün Nasılsın ?</div>
              <div className="morning-icon"></div>{" "}
            </>
          ) : (
            <></>
          )}

          {welcartType === "day" ? (
            <>
              <div className="title">İyi günler, Sena Nur Ertürk.</div>
              <div className="btn">Bugün Nasılsın ?</div>
              <div className="day-icon"></div>{" "}
            </>
          ) : (
            <></>
          )}

          {welcartType === "evening" ? (
            <>
              <div className="title">İyi Akşamlar, Sena Nur Ertürk.</div>
              <div className="btn">Bugün Nasılsın ?</div>
              <div className="evening-icon"></div>{" "}
            </>
          ) : (
            <></>
          )}

          {welcartType === "night" ? (
            <>
              <div className="title">İyi Geceler, Sena Nur Ertürk.</div>
              <div className="btn">Bugün Nasılsın ?</div>
              <div className="night-icon"></div>{" "}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeCart;
