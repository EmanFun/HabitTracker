import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addCircleOutline, calendarClear, calendarClearOutline, calendarOutline, createOutline, listCircle, listCircleOutline, listCircleSharp, listOutline } from 'ionicons/icons';
import ListHabitsPage from './pages/ListHabitsPage';
import Tab2 from './pages/Tab2';
import CreateHabitPage from './pages/CreateHabitPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React, { useEffect, useState } from 'react';
//storage
import { Storage } from '@ionic/storage';


setupIonicReact();

const App: React.FC = () => {

  const [storage, setStorage] = useState<Storage | null>(null);
  
  useEffect(()=>{
      const initializeStore = async ()=>{
        const storageInstance = new Storage();
        await storageInstance.create();
        setStorage(storageInstance);
      }
      initializeStore();
  },[]);

  return(
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/ListHabits">
            <ListHabitsPage/>
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/CreateHabits">
            <CreateHabitPage storage={storage}/>
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="/ListHabits" href="/ListHabits">
            <IonIcon aria-hidden="true" icon={listCircleOutline} />
            <IonLabel>Habitos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={calendarClearOutline} />
            <IonLabel>Resumen</IonLabel>
          </IonTabButton>
          <IonTabButton tab="/CreateHabits" href="/CreateHabits">
            <IonIcon aria-hidden="true" icon={addCircleOutline} />
            <IonLabel>Crear</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);
}
export default App;
