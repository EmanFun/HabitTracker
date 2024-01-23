import {IonCard, IonIcon, IonCardHeader, IonCardSubtitle, IonCardTitle, IonToolbar, IonButtons, IonButton} from '@ionic/react';
import { createOutline, trashOutline } from 'ionicons/icons';
export interface HabitPorps {
    name: String;
    frequency: String;
}
const HabitCard: React.FC<HabitPorps> = ({name, frequency}) => {

    return (
        <IonCard>
            <IonCardHeader>
                <IonToolbar>
                    <IonCardTitle>{name}</IonCardTitle>
                    <IonCardSubtitle>{frequency}</IonCardSubtitle>
                    <IonButtons slot='end'>
                        <IonButton>
                            <IonIcon slot='icon-only' icon={createOutline}/>
                        </IonButton>
                        <IonButton>
                            <IonIcon slot='icon-only' icon={trashOutline}/>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonCardHeader>


        </IonCard>
    )
}

export default HabitCard;