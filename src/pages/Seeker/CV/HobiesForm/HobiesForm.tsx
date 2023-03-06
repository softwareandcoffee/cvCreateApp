import Header from "../../../../layouts/Header/Header";
import "./HobiesForm.scss";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTextarea,
  IonLabel,
  IonButton,
  IonItem,
} from "@ionic/react";
const HobiesForm: any = () => {
  const isCvStates = useSelector((state: any) => state?.cv?.userCV);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header title={isCvStates ? "*Hobiler" : "Hobiler"} />
        </IonHeader>

      <IonItem>
          <IonTextarea
            placeholder="Hobiler"
            value={isCvStates?.interests}
            {...register("interests")}
          ></IonTextarea>
          {errors.desc && <span>Bu alan zorunludur.</span>}
        </IonItem>


        <div className="buttonCont">
          <IonButton shape="round" expand="block" type="submit">
            {isCvStates ? "Güncelle" : "Kaydet"}
          </IonButton>
        </div>

      </IonContent>
    </IonPage>
  );
};
export default HobiesForm;
