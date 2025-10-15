import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class Tab3Page {
  chats = [
  {
      name: 'Sumit Sharma',
      message: 'Bro, today’s chest workout was crazy! 💪',
      time: '10:45 AM',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    {
      name: 'Raushan Singh',
      message: 'Don’t forget our yoga session tomorrow 🧘‍♀️',
      time: 'Yesterday',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      name: 'Vaibhav Verma',
      message: 'Can you send me your diet plan?',
      time: 'Monday',
      avatar: 'https://i.pravatar.cc/150?img=13'
    },
    {
      name: 'Sneha Gupta',
      message: 'I joined Zumba! You should try too 😃',
      time: 'Sunday',
      avatar: 'https://i.pravatar.cc/150?img=14'
    },
    {
      name: 'Sidhant Mehta',
      message: 'Leg day tomorrow? 🔥',
      time: 'Saturday',
      avatar: 'https://i.pravatar.cc/150?img=15'
    },
    {
      name: 'Kunal Nair',
      message: 'Let’s go for a run in the evening 🏃‍♀️',
      time: 'Friday',
      avatar: 'https://i.pravatar.cc/150?img=16'
    },
    {
      name: 'Devi Patel',
      message: 'Don’t skip your protein shake! 💯',
      time: 'Wednesday',
      avatar: 'https://i.pravatar.cc/150?img=17'
    },
    {
      name: 'Kavya Iyer',
      message: 'Shared a new workout playlist 🎶',
      time: 'Tuesday',
      avatar: 'https://i.pravatar.cc/150?img=18'
    }
  ];
}
