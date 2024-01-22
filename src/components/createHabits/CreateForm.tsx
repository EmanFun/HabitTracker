import { IonButton, IonItem, IonContent, IonInput, IonSelect, IonSelectOption, IonToolbar } from "@ionic/react";
import { useState } from "react";
import {useForm, Resolver} from 'react-hook-form';


interface FormValues {
    name: String;
    frequency: String; 
}


const resolver: Resolver<FormValues> = async (values)=>{
    return {
        values: values.name ? values : {},
        errors: !values.name
        ? {
            name: {
                type: "required",
                message: "Campo Requerido",
            }
        } : {},

    }
}


const CreateForm: React.FC<FormProps> = ({onFormSubmit})=>{

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({resolver})

    const onSubmit = handleSubmit((data)=> console.log(data))

    return (
        <IonContent color={'light'}>
            <form onSubmit={onSubmit} style={{margin: '10px', backgroundColor: 'white'}}>
                <IonItem>
                    <IonInput label="Nombre del Habito" labelPlacement="floating" fill="outline" placeholder="ingrese el texto"/>
                </IonItem>
                <IonItem>
                    <IonSelect label="Seleccione la Frecuencia" labelPlacement="floating" fill="outline">
                        <IonSelectOption value={'Diario'}>Diario</IonSelectOption>
                        <IonSelectOption value={'Semanal'}>Semanal</IonSelectOption>
                        <IonSelectOption value={'Mensual'}>Mensual</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>

                        <IonButton fill="outline">
                                Agruegar
                        </IonButton>

                </IonItem>
            </form>
        </IonContent>
    )
}

export default CreateForm;