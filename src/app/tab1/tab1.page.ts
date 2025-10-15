import { Component } from '@angular/core';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonIcon,
    IonButton,
    IonContent,
    IonList,
    IonItem,
    IonLabel
  ],
})
export class Tab1Page {
  constructor() {}

  // ----- Your Workouts -----
  workouts = [
    {
      img: 'assets/img/workout1.png',
      time: '45 min',
      level: 'Intermediate'
    },
    {
      img: 'assets/img/workout2.png',
      time: '30 min',
      level: 'Advanced'
    }
  ];

  // ----- Today’s Activity -----
  activity = [
    { icon: 'walk-outline', label: 'Steps', value: '5,234', color: 'success' },
    { icon: 'flame-outline', label: 'Calories', value: '350', color: 'danger' },
    { icon: 'timer-outline', label: 'Active Minutes', value: '45', color: 'primary' }
  ];

  // ----- Recommendations -----
  recommendation = {
    badge: 'New',
    title: 'Morning Run',
    subtitle: 'Start your day with a refreshing run',
    img: 'assets/img/morning-run.png'
  };

  // ----- Featured Workouts -----
  featured = [
    {
      title: 'Strength Training',
      subtitle: 'Build muscle and improve your strength',
      img: 'assets/img/strength.png'
    },
    {
      title: 'Yoga Flow',
      subtitle: 'Enhance flexibility and calm your mind',
      img: 'assets/img/yoga.png'
    }
  ];
}
