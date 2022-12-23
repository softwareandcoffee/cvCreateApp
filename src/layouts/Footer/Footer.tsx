import { IonBackButton, IonButtons, IonContent, IonFooter, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { chevronBack, cloudDownload, personCircle } from "ionicons/icons";


import { useHistory } from "react-router-dom";
import "./Footer.scss";
const Footer: React.FC = () => {
  const history = useHistory();

  return (
    <div className="Header">
      
    

   <IonToolbar>
   <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="#" text=""></IonBackButton>
        </IonButtons>
        <IonTitle className="text" >CV APP</IonTitle>
      </IonToolbar>
        </IonToolbar>

        
       
      </div>
  
  );
};

export default Footer;
