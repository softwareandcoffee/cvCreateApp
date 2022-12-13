
import {
    IonContent,
    IonHeader,
    IonPage,
    IonLabel, IonSegment, IonSegmentButton,
    IonToolbar,
    IonSlides, IonSlide

} from "@ionic/react";
import { useState } from "react";

import "./index.scss";
import SeekerLogin from "./Login/SeekerLogin";
import SeekerRegister from "./Register/SeekerRegister";


const SeekerAuth: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const slideOpts = {
        initialSlide: 1,
        speed: 400
    };


    return (
        <IonPage className="SeekerLogin">
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>

                        <IonSegment value="default">
                            <IonSegmentButton value="default" onClick={() => setIsLogin(true)}>
                                <IonLabel >Giriş Yap</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="segment" onClick={() => setIsLogin(false)}>
                                <IonLabel>Kayıt Ol</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>
                </IonHeader>


                <IonSlides pager={true} options={slideOpts}>

                    {
                        isLogin ? (<IonSlide>
                            <SeekerRegister />

                        </IonSlide>
                        ) : (<IonSlide><SeekerLogin />

                        </IonSlide>)
                    }


                </IonSlides>



            </IonContent>
        </IonPage>
    );
};

export default SeekerAuth
    ;
