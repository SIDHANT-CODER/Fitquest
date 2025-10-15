import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  LoadingController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; 
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  private loadingCtrl = inject(LoadingController);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }

  // 🔹 Called when tab changes
  async onTabChange() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'crescent',
      duration: 100, 
      cssClass: 'custom-loading',
    });

    await loading.present();
  }
}
