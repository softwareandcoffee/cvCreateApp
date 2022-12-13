
import {
    IonCol, IonGrid, IonRow, IonContent, IonPage
} from '@ionic/react';
import { Link } from 'react-router-dom';


import "./Home.scss";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="Home" fullscreen>
                <IonGrid style={{ height: '100%', padding: '0px' }}>
                    <IonRow style={{ height: '50%' }}>
                        <IonCol style={{ margin: '0px', padding: '0px' }}>
                            <div className='homeBox employee'>
                             {/* <span>İş Veren</span> */}
                                <Link to="/seekerAuth">İş Veren</Link>

                            </div>
                        </IonCol>

                    </IonRow>
                    <IonRow style={{ height: '50%' }}>
                        <IonCol style={{ margin: '0px', padding: '0px' }}>
                            <div className='homeBox searcher'>
                                <Link to="/seekerAuth">İş Arıyorum</Link>
                            </div>
                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Home;
