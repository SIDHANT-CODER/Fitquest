import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.page.html',
  standalone: true,
  // ✅ RouterLink re-added so you can use [routerLink] in the HTML
  imports: [
    IonicModule
  ]
})
export class DeveloperPage { }
