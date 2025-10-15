import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngFor

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  standalone: true,
  imports: [
    IonicModule,   // Ionic components like ion-card, ion-radio
    FormsModule,   // For [(ngModel)]
    CommonModule   // ✅ Needed for *ngFor
  ]
})
export class LanguagePage {

  languages = [
    { code: 'en', name: 'English', description: 'Default app language' },
    { code: 'hi', name: 'Hindi', description: 'हिंदी भाषा का उपयोग करें' },
    { code: 'es', name: 'Spanish', description: 'Usa la aplicación en español' },
    { code: 'fr', name: 'French', description: 'Utilisez l’application en français' },
    { code: 'de', name: 'German', description: 'Verwenden Sie die App auf Deutsch' }
  ];

  selectedLanguage: string = 'en';

  getSelectedLanguageName(): string {
    const lang = this.languages.find(l => l.code === this.selectedLanguage);
    return lang ? lang.name : 'Unknown';
  }
}
