import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';   // <-- Import Ionic components

@Component({
  selector: 'app-change-password',
  standalone: true,                            // <-- Standalone component
  imports: [IonicModule],                       // <-- Allow using ion-* tags
  templateUrl: './change-password.page.html',
})
export class ChangePasswordPage {

  constructor() {}

  onSubmit() {
    console.log('Submit button clicked!');
    alert('Submit button pressed (demo only)');
  }
}
