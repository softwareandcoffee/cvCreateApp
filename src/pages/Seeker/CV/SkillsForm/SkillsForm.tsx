import Header from "../../../../layouts/Header/Header";
import { IonContent, IonHeader, IonPage, IonSelect, IonSelectOption } from "@ionic/react";
import "./SkillsForm.scss";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  IonButton,
  IonLabel,
  IonItem,
  IonInput,
  IonList,
} from "@ionic/react";

const SkillsForm: any = () => {
  let isCvStates :any = useSelector((state: any) => state?.cv?.userCV.skills);
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
          <Header title={isCvStates ? " *Beceriler" : "Beceriler"} />
        </IonHeader>
       
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonList className="skills-list">
          {isCvStates?.map((item:any)=>( <div>

            <IonItem>
             
              <IonInput
                value={item?.ability}
                {...register("name", { required: true })}
                placeholder="örn: Microsoft word"
              ></IonInput>
              {errors.name && <span>This field is required</span>}
            </IonItem>
           
            <IonItem>
        <IonSelect interface="action-sheet" placeholder="seviye seç">
          <IonSelectOption value={item?.level}>çok iyi</IonSelectOption>
          <IonSelectOption value={item?.level}>iyi</IonSelectOption>
          <IonSelectOption value={item?.level}>orta</IonSelectOption>
        </IonSelect>
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
export default SkillsForm;
