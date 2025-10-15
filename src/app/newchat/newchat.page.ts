import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ✅ Import all needed Ionic components
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonAvatar,
  IonButton,
  IonInput,
  IonLabel,
  IonItem,
  IonTextarea
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-newchat',
  templateUrl: './newchat.page.html',
  // ✅ Add all modules/components here
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonAvatar,
    IonButton,
    IonInput,
    IonLabel,
    IonItem,
    IonTextarea
  ]
})
export class NewchatPage {

  newChat = {
    name: '',
    age: null,
    phone: '',
    email: '',
    bio: ''
  };

  previewImage: string | ArrayBuffer | null = null;

  constructor() {}

  uploadImage() {
    alert('Upload photo feature coming soon!');
  }

  addNewChat() {
    if (!this.newChat.name || !this.newChat.age || !this.newChat.phone) {
      alert('Please fill out all required fields.');
      return;
    }
    console.log('New chat added:', this.newChat);
    alert(`New chat with ${this.newChat.name} added successfully!`);
  }
}
