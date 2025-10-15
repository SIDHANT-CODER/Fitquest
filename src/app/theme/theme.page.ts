import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.page.html',
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class ThemePage {
  lightMode = false;
  darkMode = false;
  autoMode = true;

  constructor() {
    this.setTheme('auto');
  }

  setTheme(mode: string) {
    document.body.classList.remove('light', 'dark');

    if (mode === 'light') {
      document.body.classList.add('light');
      this.lightMode = true;
      this.darkMode = false;
      this.autoMode = false;
    } else if (mode === 'dark') {
      document.body.classList.add('dark');
      this.lightMode = false;
      this.darkMode = true;
      this.autoMode = false;
    } else {
      // Auto: follows device theme
      this.lightMode = false;
      this.darkMode = false;
      this.autoMode = true;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      if (prefersDark.matches) {
        document.body.classList.add('dark');
      }
    }
  }
}
