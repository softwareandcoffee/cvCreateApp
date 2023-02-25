import Header from "../../../../layouts/Header/Header";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTextarea,
  IonLabel,
  IonButton,
  IonItem,
} from "@ionic/react";
import "./AboutForm.scss";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

const AboutForm: any = () => {
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
          <Header title={isCvStates ? "*Hakkında" : " Hakkında"} />
        </IonHeader>

        <IonItem>
          <IonTextarea
            placeholder="Kendinden Bahset"
            value={isCvStates?.desc}
            {...register("desc", { required: true })}
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
export default AboutForm;
