import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class NotificationPage implements OnInit {

  notifications: any[] = [];

  constructor() { }

  ngOnInit() {
    this.notifications = [
      {
        title: 'New Message',
        message: 'You received a new message from Alex.',
        time: '2m ago',
        avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
      },
      {
        title: 'System Update',
        message: 'Your app was updated successfully.',
        time: '10m ago',
        avatar: 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
      },
      {
        title: 'Event Reminder',
        message: 'Yoga class starts at 6:00 PM.',
        time: '1h ago',
        avatar: 'https://cdn-icons-png.flaticon.com/512/190/190411.png'
      }
    ];
  }

  clearNotifications() {
    this.notifications = [];
  }

}
