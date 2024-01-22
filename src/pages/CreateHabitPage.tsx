import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import CreateForm from '../components/createHabits/CreateForm';


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agregar Habito</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <CreateForm/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
