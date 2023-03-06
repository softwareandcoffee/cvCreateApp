import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import "./ReferanceForm.scss";
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
const ReferanceForm: any = () => {
  const onSubmit: any = (data: any) => console.log(data);
  let isCvStates : any = useSelector((state: any) => state?.cv?.userCV.references
  );
  isCvStates = JSON.parse(isCvStates)
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
              <IonLabel position="floating">Şirket Adı</IonLabel>
              <IonInput
                value={item?.companyName}
                {...register("name", { required: true })}
                placeholder="örn: University of london"
              ></IonInput>
              {errors.name && <span>This field is required</span>}
            </IonItem>
            <IonItem>
              <IonLabel position="floating">İsim</IonLabel>
              <IonInput
                value={item?.name}
                {...register("name", { required: true })}
                placeholder="örn: University of london"
              ></IonInput>
              {errors.name && <span>This field is required</span>}
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Şehir/ilçe</IonLabel>
              <IonInput
                value={item?.city}
                {...register("name", { required: true })}
                placeholder="örn: University of london"
              ></IonInput>
              {errors.name && <span>This field is required</span>}
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Açıklama</IonLabel>
              <IonInput
                value={item?.description}
                {...register("name", { required: true })}
                placeholder="örn: University of london"
              ></IonInput>
              {errors.name && <span>This field is required</span>}
            </IonItem>


        </div> ))}
       

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
export default ReferanceForm;
