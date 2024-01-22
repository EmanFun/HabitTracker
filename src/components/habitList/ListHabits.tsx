import {IonContent, IonItem, IonLabel, IonList} from '@ionic/react';
import HabitCard from './HabitCard';
import { HabitPorps } from './HabitCard';


interface Habits {
    list: HabitPorps[];
}

const ListHabits: React.FC<Habits> = ({list}) => {

    return (
        <IonContent color={'light'}>
            <IonList inset={true}>
                {
                    list.map((data, index)=>{
                        return (
                            <IonItem key={index}>
                                <IonLabel>
                                    <HabitCard name={data.name} frequency={data.frequency} />
                                    
                                </IonLabel>
                            </IonItem>
                        )
                    })
                }
            </IonList>
        </IonContent>
    )
}

export default ListHabits;