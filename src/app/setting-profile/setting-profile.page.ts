import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.page.html',
  styleUrls: ['./setting-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SettingProfilePage {
  profile = {
    name: '',
    dob: '',
    phone: '',
    height: '',
    weight: '',
    location: ''
  };

  constructor() {}

  saveProfile() {
    console.log('Profile saved:', this.profile);
    // Add logic here to save profile to backend or local storage
    alert('Profile details saved successfully!');
  }
}
