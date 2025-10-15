import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface ChatMessage {
  text: string;
  sentBy: 'me' | 'other';
  time: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,            // <-- standalone component
  imports: [CommonModule, FormsModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // <-- allow <ion-icon>
})
export class ChatPage {
  messages: ChatMessage[] = [
    { text: "Hey there! How’s your diet going?", sentBy: 'other', time: '10:52 AM' },
    { text: "Pretty good! I’m sticking to high-protein meals.", sentBy: 'me', time: '10:54 AM' },
    { text: "Nice! That’s the way to go 💪🔥", sentBy: 'other', time: '10:56 AM' },
    { text: "Khana khaya?? 💪🔥", sentBy: 'other', time: '10:56 AM' }
  ];

  newMessage: string = '';

  constructor() {}

  sendMessage() {
    if (this.newMessage.trim() === '') return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    this.messages.push({
      text: this.newMessage,
      sentBy: 'me',
      time
    });

    this.newMessage = '';
  }
}
