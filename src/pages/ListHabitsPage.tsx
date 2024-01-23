import React from 'react';
import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ListHabits from '../components/habitList/ListHabits';
import './Tab1.css';
import { LocalStorage } from './CreateHabitPage';

const Tab1: React.FC<LocalStorage> = ({storage}) => {

  const exampleList = [
    {name: "example", frequency: "example"},
    {name: "example", frequency: "example"},
    {name: "example", frequency: "example"},
  ]


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Habitos</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ListHabits list={exampleList} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
