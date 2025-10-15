import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ExercisePage {
  exercises = [
    {
      name: 'Chest Workout',
      image: 'assets/img/chest.png',
      description: 'Build strong pectoral muscles with bench press, push-ups, and dumbbell flys.',
      tips: 'Warm up properly and avoid locking elbows during presses.',
    },
    {
      name: 'Back Workout',
      image: 'assets/img/back.png',
      description: 'Strengthen lats and traps with pull-ups, bent-over rows, and deadlifts.',
      tips: 'Maintain a neutral spine while lifting to avoid injuries.',
    },
    {
      name: 'Leg Day',
      image: 'assets/img/leg.png',
      description: 'Train lower body with squats, lunges, leg press, and calf raises.',
      tips: 'Focus on depth in squats but don’ compromise knee safety.',
    },
    {
      name: 'Arm Workout',
      image: 'assets/img/arm.png',
      description: 'Tone biceps and triceps with curls, dips, and close-grip bench presses.',
      tips: 'Use controlled motions to maximize muscle engagement.',
    },
    {
      name: 'Shoulder Workout',
      image: 'assets/img/shoulder.png',
      description: 'Develop delts using overhead presses, lateral raises, and face pulls.',
      tips: 'Avoid shrugging shoulders during lateral raises.',
    },
    {
      name: 'Core & Abs',
      image: 'assets/img/core.png',
      description: 'Strengthen abs with planks, crunches, Russian twists, and leg raises.',
      tips: 'Engage your core, not your neck, during crunches.',
    },
    {
      name: 'Cardio',
      image: 'assets/img/cardio.png',
      description: 'Boost endurance with running, cycling, jump rope, and HIIT.',
      tips: 'Mix steady-state cardio with intervals for fat burn.',
    },
    {
      name: 'Yoga & Flexibility',
      image: 'assets/img/yoga.png',
      description: 'Improve balance and flexibility with asanas and deep stretches.',
      tips: 'Focus on breathing and posture for best results.',
    },
  ];
}
