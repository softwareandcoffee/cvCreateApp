import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

//Seeker
import SeekerLogin from "./pages/Seeker/Auth/Login/SeekerLogin";
import SeekerRegister from "./pages/Seeker/Auth/Register/SeekerRegister";

//Employer
import EmployerLogin from "./pages/Employer/Auth/Login/EmployerLogin";
import EmployerRegister from "./pages/Employer/Auth/Register/EmployerRegister";

//Home
import Home from "./pages/Home/Home";
import SeekerAuth from "./pages/Seeker/Auth";
import SeekerMainPage from "./pages/Seeker/SeekerMainPage/SeekerMainPage";
import Profile from "./pages/Profile/Profile";
import CreateCv from "./pages/Seeker/CreateCv/CreateCv";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/seekerAuth">
          <SeekerAuth />
        </Route>
        <Route exact path="/seekerLogin">
          <SeekerLogin />
        </Route>
        <Route exact path="/seekerRegister">
          <SeekerRegister />
        </Route>
        <Route exact path="/EmployerLogin">
          <EmployerLogin />
        </Route>
        <Route exact path="/EmployerRegister">
          <EmployerRegister />
        </Route>
        <Route exact path="/seekerMainPage">
          <SeekerMainPage />
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
        <Route exact path="/Cv">
          <CreateCv />
        </Route>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
