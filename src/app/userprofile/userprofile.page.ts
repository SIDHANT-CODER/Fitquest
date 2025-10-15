import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage {
  user: any = {};

  constructor() {
    this.loadProfile();
  }

  loadProfile() {
    const storedData = localStorage.getItem('userProfile');
    if (storedData) {
      this.user = JSON.parse(storedData);
    }
  }
}
