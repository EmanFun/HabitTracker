import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import CreateForm from '../components/createHabits/CreateForm';


export interface LocalStorage {
  storage: Storage | null;
}


const Tab3: React.FC<LocalStorage> = ({storage}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agregar Habito</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <CreateForm storage={storage}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
