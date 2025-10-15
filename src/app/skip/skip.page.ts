import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.page.html',
  styleUrls: ['./skip.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class SkipPage {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/tabs/tab4']); 
  }

  goToSignIn() {
    this.router.navigate(['/tabs/tab4']);
  }

}
