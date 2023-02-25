import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./MainForm.scss";
import {
  IonButton,
  IonLabel,
  IonItem,
  IonInput,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState } from "react";
import Header from "../../../../layouts/Header/Header";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

const MainForm: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [click, setClick] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: any = (data: any) => console.log(data);
  const isCvStates = useSelector((state: any) => state?.cv?.userCV);

  return (
    <IonPage className="SeekerRegisterPage">
      <IonContent>
        <IonHeader collapse="condense">
          <Header title={isCvStates ? "Güncelle" : "Yeni Oluştur"} />
        </IonHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <IonList>
            <IonItem>
              <IonLabel position="floating">İsim</IonLabel>

              <IonInput
                value={isCvStates?.name}
                {...register("name", { required: true })}
              ></IonInput>
              {errors.name && <span>This field is required</span>}
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Soyisim</IonLabel>
              <IonInput
                value={isCvStates?.surname}
                {...register("surname", { required: true })}
              ></IonInput>
              {errors.surname && <span>This field is required</span>}
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Email </IonLabel>
              <IonInput
                value={isCvStates?.email}
                {...register("email", { required: true })}
                type="email"
              ></IonInput>
              {errors.email && <span>This field is required</span>}
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Adres</IonLabel>
              <IonInput
                value={isCvStates?.adres}
                {...register("adres", { required: true })}
              ></IonInput>
              {errors.adres && <span>This field is required</span>}
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Telefon Numarası</IonLabel>
              <IonInput
                type="tel"
                value={isCvStates?.phone}
                {...register("phone", { required: true })}
              ></IonInput>
              {errors.phone && <span>This field is required</span>}
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Sürücü Ehliyeti</IonLabel>
              <IonInput
                value={isCvStates?.driverLicance}
                {...register("driverLicance")}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Medeni Durum</IonLabel>
              <IonInput
                value={isCvStates?.martialStatus}
                {...register("martialStatus")}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Cinsiyet</IonLabel>
              <IonSelect
                placeholder="Seçiniz"
                selectedText={isCvStates?.gender}
                {...register("gender")}
              >
                <IonSelectOption value="Erkek">Erkek</IonSelectOption>
                <IonSelectOption value="Kadın">Kadın</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Doğum Tarihi</IonLabel>
              <IonInput type="date" value={isCvStates?.birthday}></IonInput>
            </IonItem>
          </IonList>

          <div className="buttonCont">
            <IonButton shape="round" expand="block" type="submit">
              {isCvStates ? "Güncelle" : "Kaydet"}
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default MainForm;
