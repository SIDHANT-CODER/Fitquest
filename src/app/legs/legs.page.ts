import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legs',
  templateUrl: './legs.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class LegsPage {

  exercises = [
    {
      name: 'Squats',
      description: 'Squats strengthen your quadriceps, hamstrings, and glutes. Perform with proper form for best results.',
      image: 'assets/img/squats.png'
    },
    {
      name: 'Lunges',
      description: 'Lunges target the thighs and glutes, improving balance and coordination.',
      image: 'assets/img/lunges.png'
    },
    {
      name: 'Leg Press',
      description: 'Using the leg press machine helps isolate your leg muscles and build strength.',
      image: 'assets/img/legpress.png'
    },
    {
      name: 'Calf Raises',
      description: 'Calf raises strengthen your lower legs and improve balance.',
      image: 'assets/img/calf-rase.png'
    },
    {
      name: 'Deadlifts',
      description: 'Deadlifts target the hamstrings, glutes, and lower back for overall leg and core strength.',
      image: 'assets/img/deadlift.png'
    }
  ];
}
