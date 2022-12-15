import {
  IonCol,
  IonGrid,
  IonRow,
  IonContent,
  IonPage,
  IonButton,
} from "@ionic/react";
import { Link, Route } from "react-router-dom";

import "./Home.scss";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="Home" fullscreen>
        <IonGrid style={{ height: "100%", padding: "0px" }}>
          <IonRow style={{ height: "50%" }}>
            <IonCol style={{ margin: "0px", padding: "0px" }}>
              <div className="homeBox employee">
                <div className="first-text">Eleman mı arıyorsun?</div>
                <div className="second-text">Ücretsiz ilan yayınla</div>
                <Route
                  render={({ history }) => (
                    <IonButton
                      onClick={() => {
                        history.push("/seekerAuth");
                      }}
                      className="link-text"
                    >
                      Eleman Arıyorum
                    </IonButton>
                  )}
                />
              </div>
            </IonCol>
          </IonRow>
          <IonRow style={{ height: "50%" }}>
            <IonCol style={{ margin: "0px", padding: "0px" }}>
              <div className="homeBox searcher">
                <div className="first-text">İş mi arıyorsun?</div>
                <div className="second-text">Sana uygun işi hemen bul</div>
                <Route
                  render={({ history }) => (
                    <IonButton
                      onClick={() => {
                        history.push("/seekerAuth");
                      }}
                      className="link-text"
                    >
                      İş Arıyorum
                    </IonButton>
                  )}
                />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
