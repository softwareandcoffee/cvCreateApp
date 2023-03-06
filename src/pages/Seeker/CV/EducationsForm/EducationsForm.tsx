import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage, IonTextarea } from "@ionic/react";
import "./EducationsForm.scss";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import {
  IonButton,
  IonLabel,
  IonItem,
  IonInput,
  IonList,
} from "@ionic/react";

const EducationsForm: any = () => {
  const onSubmit: any = (data: any) => console.log(data);
  let isCvStates :any = useSelector((state: any) => state?.cv?.userCV.educationExperience
  );
  isCvStates = JSON.parse(isCvStates);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [click, setClick] = useState(false);
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header
            title={isCvStates ? "Güncelle" : "Yeni Oluştur"}
          />
        </IonHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <IonList>
          {isCvStates?.map((item:any)=>( <div>

            <IonItem>
              <IonLabel position="floating">Derece</IonLabel>
              <IonInput
                value={item?.level}
                {...register("name", { required: true })}
                placeholder="örn: Fen Fakültesi Diploması"
              ></IonInput>
              {errors.name && <span>This field is required</span>}
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Sehir/ilçe</IonLabel>
              <IonInput
                value={isCvStates?.name}
                {...register("name", { required: true })}
                placeholder="örn: İstanbul"
              ></IonInput>
              {errors.name && <span>This field is required</span>}
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Okul</IonLabel>
              <IonInput
                value={item?.schoolName}
                {...register("name", { required: true })}
                placeholder="örn: University of london"
              ></IonInput>
              {errors.name && <span>This field is required</span>}
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Başlangıç Tarihi</IonLabel>
              <IonInput type="date" value={item?.startDate}></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Bitiş Tarihi</IonLabel>
              <IonInput type="date" value={item?.end}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Tanım</IonLabel>
              <IonTextarea
                value={item?.description}
                {...register("name", { required: true })}
              ></IonTextarea>
              {errors.name && <span>This field is required</span>}
            </IonItem>



          </div>))}
            


            <div className="buttonCont">
              <IonButton shape="round" expand="block" className="button-add">
                Ekle
              </IonButton>
            </div>


            <div className="buttonCont">
              <IonButton shape="round" expand="block" type="submit">
                {isCvStates ? "Güncelle" : "Kaydet"}
              </IonButton>
            </div>
          </IonList>


        </form>



      </IonContent>
    </IonPage>
  );
};
export default EducationsForm;
