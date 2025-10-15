import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // <-- add this
import { Router, RouterLink } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, RouterLink] // <-- add FormsModule here
})
export class SettingPage {
  pushNotifications: boolean = true;
  emailNotifications: boolean = false;
  fingerprintAuth: boolean = false;
  twoFA: boolean = false;

  constructor(private router: Router, private toastCtrl: ToastController) {}

  async togglePush(event: any) {
    const toast = await this.toastCtrl.create({
      message: `Push Notifications ${this.pushNotifications ? 'Enabled' : 'Disabled'}`,
      duration: 1500,
      color: 'primary'
    });
    toast.present();
  }

  async toggleEmail(event: any) {
    const toast = await this.toastCtrl.create({
      message: `Email Notifications ${this.emailNotifications ? 'Enabled' : 'Disabled'}`,
      duration: 1500,
      color: 'primary'
    });
    toast.present();
  }

  async toggleFingerprint(event: any) {
    const toast = await this.toastCtrl.create({
      message: `Fingerprint Authentication ${this.fingerprintAuth ? 'Enabled' : 'Disabled'}`,
      duration: 1500,
      color: 'primary'
    });
    toast.present();
  }

  async toggle2FA(event: any) {
    const toast = await this.toastCtrl.create({
      message: `Two-Factor Authentication ${this.twoFA ? 'Enabled' : 'Disabled'}`,
      duration: 1500,
      color: 'primary'
    });
    toast.present();
  }

  logout() {
    // Clear user session here
    this.router.navigate(['/login']);
  }
}
