import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab5',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  // ✅ Store all user data here
  user = {
    name: '',
    email: '',
    height: 0,
    weight: 0,
    bmi: 0,
    bio: '',
    image: '',
  };

  previewImg: string | null = null;

  constructor(private router: Router) {}

  // ✅ Image uploader
  onImageSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => (this.previewImg = reader.result as string);
    reader.readAsDataURL(file);
  }

  // ✅ BMI calculator
  calculateBMI() {
    if (this.user.height > 0 && this.user.weight > 0) {
      const heightInMeters = this.user.height / 100;
      this.user.bmi = parseFloat(
        (this.user.weight / (heightInMeters * heightInMeters)).toFixed(2)
      );
    } else {
      this.user.bmi = 0;
    }
  }

  // ✅ Save and navigate to userprofile
  saveProfile() {
    const profileData = {
      ...this.user,
      image: this.previewImg,
    };
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    this.router.navigate(['/userprofile']);
  }
}
