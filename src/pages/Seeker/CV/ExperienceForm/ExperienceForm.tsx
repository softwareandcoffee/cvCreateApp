import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./ExperienceForm.scss";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  IonButton,
  IonLabel,
  IonItem,
  IonInput,
  IonList,
  IonTextarea
} from "@ionic/react";
const ExperienceForm: any = () => {
  let isCvStates : any = useSelector((state: any) => state?.cv?.userCV.workExperience);
  isCvStates = JSON.parse(isCvStates);
  
 const onSubmit: any = (data: any) => console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header title={isCvStates ? "Güncelle" : "Yeni Oluştur"} />
        </IonHeader>
       
       <form onSubmit={handleSubmit(onSubmit)}>
          <IonList>
          {isCvStates?.map((item:any)=>( <div>
            <IonItem>
              <IonLabel position="floating">İş unvanı</IonLabel>
              <IonInput
                value={item?.title}
                {...register("name", { required: true })}
                placeholder="örn: Fen Fakültesi Diploması"
              ></IonInput>
              {errors.name && <span>This field is required</span>}
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Sehir/ilçe</IonLabel>
              <IonInput
                value={item?.city}
                {...register("name", { required: true })}
                placeholder="örn: İstanbul"
              ></IonInput>
              {errors.name && <span>This field is required</span>}
            </IonItem>

            <IonItem>
              <IonLabel position="floating">İş Veren</IonLabel>
              <IonInput
                value={item?.companyName}
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
              <IonLabel position="floating">Açıklama</IonLabel>
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
export default ExperienceForm;
