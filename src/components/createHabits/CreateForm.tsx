import React, { useEffect, useState } from "react";
import { IonButton, IonItem, IonContent, IonInput, IonSelect, IonSelectOption, IonToolbar } from "@ionic/react";
import {useForm, SubmitHandler} from 'react-hook-form';
import { LocalStorage } from "../../pages/CreateHabitPage";


type FormValues = {
    name: String
    frequency: String;
}




const CreateForm: React.FC<LocalStorage> = ({storage}) =>{
    const [id, setId] = useState<number>(0);
    const [habitList, setHabitList] = useState<FormValues[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const saveHabit = async (data) => {
        if(storage){
            setHabitList([...habitList, data]);
            await storage.set(`${id}`, JSON.stringify(habitList));
            console.log('Datos ingresados correctamente: ', data, habitList);
            setId(id + 1);
            console.log(id)
        }
    };
    
    
    const onSubmit: SubmitHandler<FormValues> = async (data)=> await saveHabit(data);

    return (
        <IonContent color={'light'}>
            <form onSubmit={handleSubmit(onSubmit)} style={{margin: '10px', padding: '10px', backgroundColor: 'white'}}>
                <IonItem >
                    <IonInput  {...register('name')} label="Nombre" labelPlacement="floating" fill="outline" placeholder="ingrese el texto"/>
                </IonItem>
                <IonItem>
                    <IonSelect {...register('frequency')} label="Seleccione la Frecuencia" labelPlacement="floating" fill="outline">
                        <IonSelectOption value={'Diaria'}>Diaria</IonSelectOption>
                        <IonSelectOption value={'Semanal'}>Semanal</IonSelectOption>
                        <IonSelectOption value={'Mensual'}>Mensual</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>

                        <IonButton type="submit" fill="outline">
                                Agruegar
                        </IonButton>

                </IonItem>
            </form>
        </IonContent>
    )
};

export default CreateForm;